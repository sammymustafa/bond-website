/**
 * Builds an editable .docx for every template page (category "template") and
 * writes it to public/downloads/<slug>.docx. Run after editing a template:
 *
 *   npx tsx scripts/gen-docx.ts
 *
 * Uses the "docx" dev dependency.
 */
import * as docx from "docx";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pages } from "../src/content/registry";
import type { Block, SeoPage } from "../src/content/types";

const {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = docx;

type Run = docx.TextRun;
type DocBlock = docx.Paragraph | docx.Table;

const stripCites = (t: string) => t.replace(/\{\{cite:[^}]+\}\}/g, "").replace(/\s+([.,;:])/g, "$1");

/** Converts the inline markup subset to bold/plain runs; links keep their label. */
function runs(text: string, base: Partial<docx.IRunOptions> = {}): Run[] {
  const clean = stripCites(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1").replace(/`([^`]+)`/g, "$1");
  const parts = clean.split(/(\*\*[^*]+\*\*)/g);
  return parts
    .filter(Boolean)
    .map((p) =>
      p.startsWith("**") && p.endsWith("**")
        ? new TextRun({ text: p.slice(2, -2), bold: true, ...base })
        : new TextRun({ text: p, ...base }),
    );
}

const para = (text: string, opts: Partial<docx.IParagraphOptions> = {}) => new Paragraph({ children: runs(text), spacing: { after: 120 }, ...opts });

function blockToDocx(b: Block): DocBlock[] {
  switch (b.type) {
    case "p":
      return [para(b.text)];
    case "h3":
      return [new Paragraph({ text: b.text, heading: HeadingLevel.HEADING_3, spacing: { before: 240, after: 120 } })];
    case "ul":
      return b.items.map((t) => new Paragraph({ children: runs(t), bullet: { level: 0 }, spacing: { after: 80 } }));
    case "ol":
      return b.items.map((t, i) => new Paragraph({ children: [new TextRun({ text: `${i + 1}. `, bold: true }), ...runs(t)], spacing: { after: 80 }, indent: { left: 360 } }));
    case "checklist":
      return b.items.map((t) => new Paragraph({ children: [new TextRun({ text: "☐  " }), ...runs(t)], spacing: { after: 80 }, indent: { left: 360 } }));
    case "callout":
      return [
        new Paragraph({
          children: [...(b.title ? [new TextRun({ text: `${b.title}: `, bold: true })] : []), ...runs(b.text)],
          shading: { type: ShadingType.CLEAR, fill: "EEF4FF" },
          spacing: { before: 120, after: 160 },
          indent: { left: 200, right: 200 },
        }),
      ];
    case "quote":
      return [new Paragraph({ children: runs(b.text, { italics: true }), indent: { left: 720 }, spacing: { after: 120 } })];
    case "steps":
      return b.items.flatMap((s, i) => [
        new Paragraph({ children: [new TextRun({ text: `Step ${i + 1}: ${s.title}`, bold: true })], spacing: { before: 120, after: 40 } }),
        para(s.text, { indent: { left: 360 } }),
      ]);
    case "script":
      return b.lines.map(
        (l) =>
          new Paragraph({
            children: [new TextRun({ text: `${l.speaker.toUpperCase()}: `, bold: true }), new TextRun({ text: l.text })],
            spacing: { after: 100 },
          }),
      );
    case "form":
      return [
        ...(b.title ? [new Paragraph({ text: b.title, heading: HeadingLevel.HEADING_3, spacing: { before: 240, after: 120 } })] : []),
        ...b.fields.flatMap((f) => {
          const label = new Paragraph({
            children: [new TextRun({ text: f.kind === "checkbox" ? `☐  ${f.label}` : f.label, bold: f.kind !== "checkbox" })],
            spacing: { before: 120, after: 40 },
          });
          const hint = f.hint ? [new Paragraph({ children: [new TextRun({ text: f.hint, italics: true, size: 18, color: "666666" })], spacing: { after: 40 } })] : [];
          const opts = f.kind === "select" && f.options ? [new Paragraph({ children: [new TextRun({ text: `Options: ${f.options.join(" / ")}`, size: 18, color: "666666" })] })] : [];
          const blank =
            f.kind === "checkbox"
              ? []
              : [
                  new Paragraph({
                    text: f.kind === "textarea" ? "\n\n" : "",
                    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } },
                    spacing: { after: 160 },
                  }),
                ];
          return [label, ...hint, ...opts, ...blank];
        }),
      ];
    case "table": {
      const header = new TableRow({
        tableHeader: true,
        children: b.columns.map(
          (c) =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: c, bold: true })] })],
              shading: { type: ShadingType.CLEAR, fill: "F3F4F6" },
            }),
        ),
      });
      const rows = b.rows.map(
        (r) =>
          new TableRow({
            children: r.map((cell) => new TableCell({ children: [new Paragraph({ children: runs(cell) })] })),
          }),
      );
      return [
        ...(b.caption ? [new Paragraph({ children: [new TextRun({ text: b.caption, bold: true })], spacing: { before: 160, after: 80 } })] : []),
        new Table({ rows: [header, ...rows], width: { size: 100, type: WidthType.PERCENTAGE } }),
        ...(b.note ? [new Paragraph({ children: runs(b.note, { size: 18, color: "666666" }), spacing: { before: 60, after: 160 } })] : [new Paragraph({ text: "", spacing: { after: 120 } })]),
      ];
    }
    case "stats":
      return b.items.map((s) => new Paragraph({ children: [new TextRun({ text: `${s.value} `, bold: true }), new TextRun({ text: s.label })], bullet: { level: 0 } }));
    default:
      return [];
  }
}

function buildDoc(page: SeoPage) {
  const children: DocBlock[] = [
    new Paragraph({ text: page.h1, heading: HeadingLevel.TITLE }),
    new Paragraph({
      children: [new TextRun({ text: `Bond Health template · bondtrials.com${page.path} · Last updated ${page.lastUpdated}`, size: 18, color: "666666" })],
      spacing: { after: 240 },
    }),
    para(page.intro),
  ];
  for (const s of page.sections) {
    const blocks = s.blocks.filter((b) => !["pageList", "cta", "download", "trialCounts", "trials", "chart"].includes(b.type));
    if (!blocks.length) continue;
    children.push(new Paragraph({ text: s.heading, heading: HeadingLevel.HEADING_2, spacing: { before: 320, after: 120 } }));
    for (const b of blocks) children.push(...blockToDocx(b));
  }
  if (page.sources.length) {
    children.push(new Paragraph({ text: "Sources", heading: HeadingLevel.HEADING_2, spacing: { before: 320, after: 120 } }));
    page.sources.forEach((s, i) =>
      children.push(
        new Paragraph({
          children: [new TextRun({ text: `${i + 1}. ${s.title}. ${s.publisher}${s.year ? `, ${s.year}` : ""}.${s.url ? ` ${s.url}` : ""}`, size: 18 })],
          spacing: { after: 60 },
        }),
      ),
    );
  }
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "This template is provided by Bond Health, Inc. for general informational purposes and is not legal or regulatory advice. Adapt it to your site, your protocol and your IRB's requirements before use.",
          size: 18,
          color: "666666",
          italics: true,
        }),
      ],
      spacing: { before: 320 },
      alignment: AlignmentType.LEFT,
    }),
  );
  return new Document({
    creator: "Bond Health",
    title: page.h1,
    description: page.description,
    styles: {
      default: { document: { run: { font: "Calibri", size: 22 } } },
    },
    sections: [{ properties: {}, children }],
  });
}

async function main() {
  const outDir = join(process.cwd(), "public", "downloads");
  mkdirSync(outDir, { recursive: true });
  const templates = pages.filter((p) => p.category === "template");
  for (const p of templates) {
    const slug = p.path.split("/").pop()!;
    const buf = await Packer.toBuffer(buildDoc(p));
    writeFileSync(join(outDir, `${slug}.docx`), buf);
    console.log(`wrote public/downloads/${slug}.docx (${Math.round(buf.length / 1024)} KB)`);
  }
  if (!templates.length) console.log("no template pages found");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
