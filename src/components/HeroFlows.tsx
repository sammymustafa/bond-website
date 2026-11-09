"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Check,
  ClipboardList,
  History,
  LoaderCircle,
  Megaphone,
  Pause,
  Phone,
  Play,
  Stethoscope,
} from "lucide-react";

/*
 * The homepage hero graphic: how Bond works, in two acts.
 *
 * 1. Connect. Bond connects to the site's EHR and CTMS, imports the leads exported
 *    from past ad campaigns, and launches new Meta and Google ads it creates and runs.
 * 2. Flow. Patients travel as small tokens from those sources into Bond's card,
 *    which shows the work: screening against the protocol, a text screening, a voice
 *    call. Each booked patient drops onto the site's calendar, and after the
 *    screening visit the slot turns to Enrolled.
 *
 * The words follow the Bond platform: the stages (Lead, Matched, Contacted,
 * Scheduled, Screened, Enrolled), the criterion verdicts (Met, Cleared, Triggered)
 * and the outcomes ("Likely qualified" for a text screening, "Answered · Qualified"
 * for a call).
 *
 * The stage has a fixed height and everything in it moves with transform and
 * opacity only, so it never shifts the page. Reduced motion shows the final frame.
 * The figure caption is the text alternative and the stage is hidden from screen
 * readers, so nothing is announced as it changes. All data is illustrative.
 */

type Patient = "a" | "b" | "c" | "d";
type Source = "ehr" | "ctms" | "past" | "ads";
type Link = "off" | "connecting" | "on";
type TokenAt = "source" | "card" | "out" | "slot";
type CardPos = "front" | "back" | "before" | "after";
type ViewQueue = "watching" | "screening" | "screened";
type ViewA = "chart" | "texted" | "qualified" | "booked";
type ViewB = "lead" | "call" | "booked";
type Slot = "none" | "scheduled" | "screened" | "enrolled";

const PHASES = ["Connect", "Screen", "Contact", "Book", "Enroll"] as const;
const TALLY = [
  { key: "matched", label: "Matched" },
  { key: "contacted", label: "Contacted" },
  { key: "scheduled", label: "Scheduled" },
  { key: "enrolled", label: "Enrolled" },
] as const;
type TallyKey = (typeof TALLY)[number]["key"];

interface Frame {
  ms: number;
  phase: number;
  link: Record<Source, Link>;
  tokens: Record<Patient, { at: TokenAt; on: boolean }>;
  cards: { setup: CardPos; queue: CardPos; a: CardPos; b: CardPos };
  view: { queue: ViewQueue; a: ViewA; b: ViewB };
  slots: Record<"a" | "b", Slot>;
  afterVisit: boolean;
  pulse: Source[];
  flow: Record<Source | "out", boolean>;
  /** The sample study's counts, in the platform's lifecycle words. 0 means the step has not happened yet. */
  tally: Record<TallyKey, number>;
}

const START: Frame = {
  ms: 900,
  phase: 0,
  link: { ehr: "off", ctms: "off", past: "off", ads: "off" },
  tokens: {
    a: { at: "source", on: false },
    b: { at: "source", on: false },
    c: { at: "source", on: false },
    d: { at: "source", on: false },
  },
  cards: { setup: "front", queue: "before", a: "before", b: "before" },
  view: { queue: "watching", a: "chart", b: "lead" },
  slots: { a: "none", b: "none" },
  afterVisit: false,
  pulse: [],
  flow: { ehr: false, ctms: false, past: false, ads: false, out: false },
  tally: { matched: 0, contacted: 0, scheduled: 0, enrolled: 0 },
};

/** Each frame is the whole scene; CSS transitions move everything between frames. */
function buildFrames(): Frame[] {
  const frames: Frame[] = [START];
  const next = (ms: number, change: (f: Frame) => void) => {
    const f: Frame = structuredClone(frames[frames.length - 1]);
    f.ms = ms;
    f.pulse = [];
    change(f);
    frames.push(f);
  };
  // Act 1: connect every source, one after another
  next(700, (f) => { f.link.ehr = "connecting"; });
  next(700, (f) => { f.link.ehr = "on"; f.link.ctms = "connecting"; });
  next(700, (f) => { f.link.ctms = "on"; f.link.past = "connecting"; });
  next(700, (f) => { f.link.past = "on"; f.link.ads = "connecting"; });
  next(1500, (f) => { f.link.ads = "on"; });
  next(1000, (f) => {
    f.phase = 1;
    f.cards.setup = "after";
    f.cards.queue = "front";
  });
  // Act 2: patients from the EHR, the CTMS and past ad leads are screened against the protocol
  next(700, (f) => { f.pulse = ["ehr", "ctms", "past"]; f.tokens.a.on = f.tokens.c.on = f.tokens.d.on = true; });
  next(1000, (f) => {
    f.tokens.a.at = f.tokens.c.at = f.tokens.d.at = "card";
    f.flow.ehr = f.flow.ctms = f.flow.past = true;
  });
  next(1400, (f) => {
    f.tokens.a.on = f.tokens.c.on = f.tokens.d.on = false;
    f.flow.ehr = f.flow.ctms = f.flow.past = false;
    f.view.queue = "screening";
  });
  // Hidden tokens move to where they will next appear, so they never slide across the card
  next(1400, (f) => { f.view.queue = "screened"; f.tokens.a.at = "out"; f.tally.matched = 386; });
  // The EHR match: every criterion checked against the chart, then a text screening that books the visit
  next(2400, (f) => { f.cards.queue = "back"; f.cards.a = "front"; });
  next(2100, (f) => { f.phase = 2; f.view.a = "texted"; f.tally.contacted = 372; });
  next(1100, (f) => { f.view.a = "qualified"; });
  next(1500, (f) => { f.phase = 3; f.view.a = "booked"; });
  // Booked: the card drops onto the calendar
  next(600, (f) => { f.cards.a = "after"; f.cards.queue = "front"; f.tokens.a.on = true; });
  next(900, (f) => { f.tokens.a.at = "slot"; f.flow.out = true; });
  next(900, (f) => {
    f.phase = 1;
    f.tokens.a.on = false;
    f.slots.a = "scheduled";
    f.tally.scheduled = 90;
    f.flow.out = false;
    f.pulse = ["ads"];
    f.tokens.b.on = true;
  });
  // A new ad lead: called immediately; the voice agent screens and books on the call
  next(900, (f) => { f.tokens.b.at = "card"; f.flow.ads = true; });
  next(1300, (f) => { f.phase = 2; f.tokens.b.on = false; f.flow.ads = false; f.cards.queue = "back"; f.cards.b = "front"; });
  next(2600, (f) => { f.view.b = "call"; f.tokens.b.at = "out"; f.tally.contacted += 1; });
  next(1700, (f) => { f.phase = 3; f.view.b = "booked"; });
  next(600, (f) => { f.cards.b = "after"; f.cards.queue = "front"; f.tokens.b.on = true; });
  next(900, (f) => { f.tokens.b.at = "slot"; f.flow.out = true; });
  next(1300, (f) => { f.tokens.b.on = false; f.slots.b = "scheduled"; f.flow.out = false; f.tally.scheduled += 1; });
  // After the screening visit
  next(1100, (f) => { f.phase = 4; f.afterVisit = true; });
  next(1300, (f) => { f.slots.a = "screened"; });
  next(4200, (f) => { f.slots.a = "enrolled"; f.tally.enrolled = 83; });
  return frames;
}

const FRAMES = buildFrames();
const FINAL = FRAMES.length - 1;

/*
 * Stage geometry. y is in px from the top of the stage. x is in percent of the
 * stage's width (cqw for the tokens), with the same 4% gutter on every row.
 */
const STAGE_H = 512;
const SOURCE_TOP = 16;
const SOURCE_BOTTOM = 84;
const CARD_TOP = 116;
const CARD_BOTTOM = 352;
const CAL_TOP = 384;
const SLOT_Y = CAL_TOP + 58;
const SOURCES: { id: Source; x: number; title: string; detail: string; short?: [string, string] }[] = [
  { id: "ehr", x: 15.5, title: "EHR", detail: "Patient charts", short: ["EHR", "Charts"] },
  { id: "ctms", x: 38.5, title: "CTMS", detail: "Site patients" },
  { id: "past", x: 61.5, title: "Past ad leads", detail: "Earlier campaigns", short: ["Past leads", "From old ads"] },
  { id: "ads", x: 84.5, title: "New ads", detail: "Run by Bond" },
];
const SOURCE_OF: Record<Patient, Source> = { a: "ehr", b: "ads", c: "ctms", d: "past" };
const SOURCE_X = Object.fromEntries(SOURCES.map((s) => [s.id, s.x])) as Record<Source, number>;
// Where each token meets the card: fanned out so the three that arrive together don't overlap
const CARD_X: Record<Patient, number> = { a: 50, b: 50, c: 33, d: 67 };
// Patients leave their sources a beat apart
const TOKEN_DELAY: Record<Patient, number> = { a: 120, b: 0, c: 0, d: 240 };

function tokenTranslate(p: Patient, at: TokenAt): string {
  if (at === "source") return `calc(${SOURCE_X[SOURCE_OF[p]]}cqw - 50%) calc(${SOURCE_BOTTOM + 8}px - 50%)`;
  if (at === "card") return `calc(${CARD_X[p]}cqw - 50%) calc(${CARD_TOP}px - 50%)`;
  if (at === "out") return `calc(50cqw - 50%) calc(${CARD_BOTTOM}px - 50%)`;
  return `calc(var(--slot-${p}) - 50%) calc(${SLOT_Y}px - 50%)`;
}

const PATIENT: Record<Patient, { id: string; name: string; tone: string }> = {
  a: { id: "#2103", name: "Patient #2103", tone: "bg-bond-primary" },
  b: { id: "#2417", name: "Patient #2417", tone: "bg-teal-500" },
  c: { id: "#1876", name: "Patient #1876", tone: "bg-violet-500" },
  d: { id: "#1542", name: "Patient #1542", tone: "bg-amber-500" },
};

const CAPTION =
  "Animated illustration with sample data of how Bond works. First, Bond connects to the site's EHR and CTMS, imports the leads exported from the site's past ad campaigns, and launches new Meta and Google ads that Bond creates and runs. Then patients flow in from all four and are screened against the study protocol. Patient #2103, from the EHR, is matched: every criterion is met or cleared, with evidence from the chart. Patient #1876, from the CTMS, triggers an exclusion. Bond texts Patient #2103, who is likely qualified and books a screening visit by text. Patient #2417, a new Meta ad lead, is called immediately; Bond's voice agent qualifies the patient and books the visit on the call. Both visits land on the site's calendar with Dana, the study coordinator. After the screening visit, Patient #2103 is screened and then enrolled. Below, the sample study's counts appear as each step happens: 386 matched, then 372 contacted, 90 scheduled and 83 enrolled, with contacted and scheduled each growing by one for the ad lead.";

function useMediaQuery(query: string, serverValue: boolean) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

export default function HeroFlows() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)", false);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [onScreen, setOnScreen] = useState(true);

  // Only run while the graphic is on screen
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !playing || !onScreen) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % FRAMES.length), FRAMES[step].ms);
    return () => window.clearTimeout(id);
  }, [step, playing, onScreen, reduced]);

  // The wires are drawn in real pixels, so they need the stage's width
  const stage = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = stage.current;
    if (!el || !("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const f = FRAMES[reduced ? FINAL : step];

  return (
    <figure
      ref={root}
      className={`relative bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden ${
        playing ? "" : "[&_*]:[animation-play-state:paused]"
      }`}
    >
      <figcaption className="sr-only">{CAPTION}</figcaption>

      {/* App header: Bond, the phase the story is in, and the controls */}
      <div className="flex items-center justify-between gap-3 h-12 px-4 bg-gray-50/80 border-b border-gray-100">
        <div className="flex items-center gap-2 shrink-0">
          <BondMark size={28} />
          <span className="font-semibold text-gray-800 text-sm">Bond</span>
        </div>
        {/* A step indicator, not tabs: no pills or borders, so nothing here looks clickable */}
        <ol aria-hidden className="hidden sm:flex items-center gap-3 min-w-0">
          {PHASES.map((phase, i) => (
            <li
              key={phase}
              className={`flex items-center gap-1.5 text-[11px] whitespace-nowrap transition-colors duration-300 ${
                i === f.phase ? "font-semibold text-gray-900" : "font-medium text-gray-400"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === f.phase ? "bg-bond-primary" : i < f.phase ? "bg-gray-400" : "bg-gray-300"
                }`}
              />
              {phase}
            </li>
          ))}
        </ol>
        <div className="flex items-center gap-2 shrink-0">
          {/* A plain label, not a pill, so it does not read as a button */}
          <span className="text-[11px] italic text-gray-400 whitespace-nowrap">Sample data</span>
          {/* WCAG 2.2.2: anything that moves for more than five seconds can be paused */}
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause animation" : "Play animation"}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 transition-colors motion-reduce:hidden"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* The stage: fixed height, and an inline-size container so the tokens can move in cqw */}
      <div
        ref={stage}
        aria-hidden
        className="@container relative overflow-hidden [--slot-a:50cqw] [--slot-b:80.67cqw] sm:[--slot-a:31.6cqw] sm:[--slot-b:50cqw]"
        style={{
          height: STAGE_H,
          backgroundImage:
            "radial-gradient(circle, rgb(0 102 255 / 0.07) 1px, transparent 1.5px), linear-gradient(180deg, #f5f9ff 0%, #ffffff 55%, #f3fbf8 100%)",
          backgroundSize: "16px 16px, 100% 100%",
        }}
      >
        <Wires width={width} link={f.link} flow={f.flow} />

        {SOURCES.map((source) => (
          <SourceTile key={source.id} source={source} link={f.link[source.id]} active={f.pulse.includes(source.id)} />
        ))}

        {/* Bond's card: a small deck, with what Bond is doing now in front */}
        <div className="absolute inset-x-[4%]" style={{ top: CARD_TOP, height: CARD_BOTTOM - CARD_TOP }}>
          <DeckCard pos={f.cards.setup}>
            <SetupCard link={f.link} />
          </DeckCard>
          <DeckCard pos={f.cards.queue}>
            <QueueCard view={f.view.queue} />
          </DeckCard>
          <DeckCard pos={f.cards.a}>
            <PatientCardA view={f.view.a} />
          </DeckCard>
          <DeckCard pos={f.cards.b}>
            <PatientCardB view={f.view.b} />
          </DeckCard>
        </div>

        <Calendar slots={f.slots} afterVisit={f.afterVisit} />

        {(Object.keys(PATIENT) as Patient[]).map((p) => (
          <span
            key={p}
            className={`absolute left-0 top-0 z-30 flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full bg-white border border-gray-200 shadow-md text-[11px] font-semibold text-gray-800 transition-[translate,opacity,scale] duration-[850ms] ease-in-out motion-reduce:transition-none ${
              f.tokens[p].on ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ translate: tokenTranslate(p, f.tokens[p].at), transitionDelay: `${TOKEN_DELAY[p]}ms` } as CSSProperties}
          >
            <span className={`w-2 h-2 rounded-full ${PATIENT[p].tone}`} />
            {PATIENT[p].id}
          </span>
        ))}
      </div>

      <Tally tally={f.tally} reduced={reduced} />
    </figure>
  );
}

/**
 * The footer: the sample study's counts at each lifecycle stage, as the trial cards in
 * the Bond platform show them. Each count stays empty until its step happens in the
 * story above (matching, the first contact, the first booking, enrolment); then it pops
 * up and rolls to its number. Later steps add one and show a "+1".
 */
function Tally({ tally, reduced }: { tally: Frame["tally"]; reduced: boolean }) {
  return (
    <div aria-hidden className="grid grid-cols-4 h-16 border-t border-gray-100 bg-gray-50/80 divide-x divide-gray-100">
      {TALLY.map(({ key, label }) => (
        <TallyCell key={key} value={tally[key]} label={label} highlight={key === "enrolled"} reduced={reduced} />
      ))}
    </div>
  );
}

function TallyCell({ value, label, highlight, reduced }: { value: number; label: string; highlight: boolean; reduced: boolean }) {
  const shown = useCountUp(value, reduced);
  // A small step (one more patient) shows "+n"; a count's first appearance does not
  const [step, setStep] = useState({ value, delta: 0 });
  if (step.value !== value) setStep({ value, delta: value - step.value });
  const delta = step.delta;
  const live = value > 0;
  return (
    <div className="relative flex flex-col items-center justify-center min-w-0 px-1 overflow-hidden">
      {/* A soft wash on the cell whenever its count changes */}
      {live && <span key={`wash-${value}`} className="pointer-events-none absolute inset-0 bg-bond-primary/10 opacity-0 motion-safe:animate-[wash_1.4s_ease-out]" />}
      {/* Fixed slots per digit, so nothing moves as the count grows. Before its step, a dash holds the place;
          keyed so the number pops in the moment its step happens. */}
      <span
        key={live ? "on" : "off"}
        className={`relative flex text-[20px] sm:text-[22px] font-bold leading-none tabular-nums tracking-tight ${live ? "motion-safe:animate-[pop_0.45s_ease-out]" : ""}`}
      >
        {String(shown)
          .padStart(3, "0")
          .split("")
          .map((digit, i, all) => (
            <span
              key={i}
              className={`inline-block w-[1ch] text-center ${
                !live || i < all.length - String(shown).length ? "text-transparent" : highlight ? "text-green-600" : "text-gray-900"
              }`}
            >
              {digit}
            </span>
          ))}
        <span className={`absolute inset-0 flex items-center justify-center text-gray-300 transition-opacity duration-200 ${live ? "opacity-0" : "opacity-100"}`}>
          –
        </span>
      </span>
      <span className={`relative mt-1 truncate text-[10.5px] sm:text-[11px] font-medium ${live ? "text-gray-700" : "text-gray-400"}`}>
        {label}
      </span>
      {delta > 0 && delta < 10 && (
        <span
          key={value}
          className="pointer-events-none absolute right-[14%] top-1.5 text-[10.5px] font-semibold text-green-600 opacity-0 motion-safe:animate-[rise_1.2s_ease-out]"
        >
          +{delta}
        </span>
      )}
    </div>
  );
}

/** Counts up from the previous value to the new one; jumps straight there with reduced motion or when the loop resets. */
function useCountUp(target: number, reduced: boolean) {
  const [shown, setShown] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    if (reduced || target < from.current) {
      from.current = target;
      const id = requestAnimationFrame(() => setShown(target));
      return () => cancelAnimationFrame(id);
    }
    const start = from.current;
    const began = performance.now();
    const duration = Math.abs(target - start) > 10 ? 1200 : 300;
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - began) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(start + (target - start) * eased));
      if (t < 1) id = requestAnimationFrame(tick);
      else from.current = target;
    };
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      from.current = target;
    };
  }, [target, reduced]);
  return shown;
}

/** The Bond Health mark, the same file the site's navigation shows. Decorative: "Bond" is written beside it. */
function BondMark({ size }: { size: number }) {
  // SVG is served as-is: next/image does not optimize SVG (dangerouslyAllowSVG is off)
  return <Image src="/images/logo/bond-health-mark.svg" alt="" width={size} height={size} className="shrink-0 object-contain" style={{ width: size, height: size }} unoptimized />;
}

const SOURCE_COLOR: Record<Source, string> = { ehr: "#0066ff", ctms: "#7c3aed", past: "#d97706", ads: "#0d9488" };

/** The connectors, in px. A faint line draws in when a source connects; a dashed one runs while patients flow. */
function Wires({ width, link, flow }: { width: number; link: Frame["link"]; flow: Frame["flow"] }) {
  if (!width) return null;
  const mid = (SOURCE_BOTTOM + CARD_TOP) / 2;
  const x = (percent: number) => (percent * width) / 100;
  return (
    <svg className="absolute inset-0" width={width} height={STAGE_H} viewBox={`0 0 ${width} ${STAGE_H}`}>
      {SOURCES.map((s) => {
        const d = `M${x(s.x)} ${SOURCE_BOTTOM} C${x(s.x)} ${mid} ${x(50)} ${mid} ${x(50)} ${CARD_TOP}`;
        return (
          <g key={s.id}>
            <path
              d={d}
              pathLength={1}
              fill="none"
              stroke={SOURCE_COLOR[s.id]}
              strokeOpacity={0.3}
              strokeWidth={1.5}
              strokeDasharray="1 1"
              strokeDashoffset={link[s.id] === "on" ? 0 : 1}
              className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
            />
            <FlowLine d={d} on={flow[s.id]} color={SOURCE_COLOR[s.id]} />
          </g>
        );
      })}
      <path d={`M${x(50)} ${CARD_BOTTOM} L${x(50)} ${CAL_TOP}`} fill="none" stroke="#16a34a" strokeOpacity={0.3} strokeWidth={1.5} />
      <FlowLine d={`M${x(50)} ${CARD_BOTTOM} L${x(50)} ${CAL_TOP}`} on={flow.out} color="#16a34a" />
    </svg>
  );
}

function FlowLine({ d, on, color }: { d: string; on: boolean; color: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeDasharray="4 6"
      strokeLinecap="round"
      className={`transition-opacity duration-300 ${on ? "opacity-100 motion-safe:animate-[dash-flow_0.6s_linear_infinite]" : "opacity-0"}`}
    />
  );
}

const SOURCE_ICON: Record<Source, { icon: ReactNode; tone: string }> = {
  ehr: { icon: <Stethoscope className="w-4 h-4" />, tone: "bg-bond-primary/10 text-bond-primary-dark" },
  ctms: { icon: <ClipboardList className="w-4 h-4" />, tone: "bg-violet-100 text-violet-700" },
  past: { icon: <History className="w-4 h-4" />, tone: "bg-amber-100 text-amber-700" },
  ads: { icon: <Megaphone className="w-4 h-4" />, tone: "bg-bond-accent/15 text-teal-700" },
};

function SourceTile({ source, link, active }: { source: (typeof SOURCES)[number]; link: Link; active: boolean }) {
  const { icon, tone } = SOURCE_ICON[source.id];
  const on = link === "on";
  return (
    <div
      className={`absolute flex w-[21%] -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-xl border px-1 text-center transition-[border-color,background-color,box-shadow] duration-500 ${
        on
          ? active
            ? "border-bond-primary/40 bg-white shadow-[0_0_0_4px_rgba(0,102,255,0.08)]"
            : "border-gray-200 bg-white shadow-sm"
          : link === "connecting"
            ? "border-bond-primary/40 border-dashed bg-white shadow-[0_0_0_4px_rgba(0,102,255,0.06)]"
            : "border-gray-300 border-dashed bg-white/60"
      }`}
      style={{ left: `${source.x}%`, top: SOURCE_TOP, height: SOURCE_BOTTOM - SOURCE_TOP }}
    >
      <span
        className={`relative flex w-7 h-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
          on || link === "connecting" ? tone : "bg-gray-100 text-gray-400"
        }`}
      >
        {icon}
        {(active || link === "connecting") && <span className="absolute inset-0 rounded-lg bg-current opacity-20 motion-safe:animate-ping" />}
      </span>
      <span className="w-full min-w-0">
        {/* Narrow tiles (phones, and 1024 to 1279px) get shorter words where the full ones would be cut off */}
        <span className={`block truncate text-[11px] sm:text-[12px] font-semibold leading-tight transition-colors duration-500 ${on ? "text-gray-900" : "text-gray-500"}`}>
          {source.short ? (<><span className="sm:hidden lg:max-xl:inline">{source.short[0]}</span><span className="hidden sm:inline lg:max-xl:hidden">{source.title}</span></>) : source.title}
        </span>
        <span className="block truncate text-[10px] sm:text-[11px] leading-tight text-gray-500">
          {source.short ? (<><span className="sm:hidden lg:max-xl:inline">{source.short[1]}</span><span className="hidden sm:inline lg:max-xl:hidden">{source.detail}</span></>) : source.detail}
        </span>
      </span>
      {/* Connected: a check on the corner */}
      <span
        className={`absolute -top-1.5 -right-1.5 flex w-4 h-4 items-center justify-center rounded-full bg-green-500 text-white ring-2 ring-white transition-[opacity,scale] duration-300 motion-reduce:transition-none ${
          on ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
      </span>
    </div>
  );
}

const CARD_POS: Record<CardPos, string> = {
  front: "z-20 opacity-100 translate-y-0 scale-100 blur-[0px]",
  back: "z-10 opacity-40 -translate-y-3 scale-[0.94] blur-[0px]",
  before: "z-0 opacity-0 translate-y-6 scale-[0.94] blur-[3px]",
  after: "z-0 opacity-0 translate-y-16 scale-[0.6] blur-[3px]",
};

function DeckCard({ pos, children }: { pos: CardPos; children: ReactNode }) {
  return (
    <div
      className={`absolute inset-0 origin-bottom overflow-hidden rounded-xl bg-white border border-gray-200/80 shadow-[0_16px_40px_-16px_rgba(0,40,120,0.28)] transition-[opacity,translate,scale,filter] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${CARD_POS[pos]}`}
    >
      {children}
    </div>
  );
}

/** A card's header row: 48px tall, 16px side padding, like every row in the card. */
function CardTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex h-12 items-center justify-between gap-2 px-4 border-b border-gray-100">
      <div className="flex min-w-0 items-center gap-2">{children}</div>
      {right}
    </div>
  );
}

function CardHeader({ patient, source, stage }: { patient: Patient; source: string; stage: keyof typeof STAGE_TONE }) {
  return (
    <CardTitle
      right={
        // Keyed so the pill pops when the stage changes
        <span key={stage} className={`shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold motion-safe:animate-[pop_0.35s_ease-out] ${STAGE_TONE[stage]}`}>
          {stage}
        </span>
      }
    >
      <span className={`w-2.5 h-2.5 shrink-0 rounded-full ${PATIENT[patient].tone}`} />
      <span className="text-[13px] font-semibold text-gray-900 whitespace-nowrap">{PATIENT[patient].name}</span>
      <span className="text-[11px] text-gray-500 truncate">{source}</span>
    </CardTitle>
  );
}

/** One body view inside a card, under the 48px header; views cross-fade in place. */
function View({ on, children }: { on: boolean; children: ReactNode }) {
  return (
    <div
      className={`absolute inset-x-4 top-[58px] bottom-4 transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}

/** Appears `delay` ms after `on`; resets when the view leaves. */
function Later({ on, delay, children, className = "" }: { on: boolean; delay: number; children: ReactNode; className?: string }) {
  return (
    <div
      className={`transition-[opacity,translate,scale] duration-400 motion-reduce:transition-none ${on ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1.5 scale-95"} ${className}`}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

const SETUP: Record<Source, { name: string; detail: string; busy: string; done: string }> = {
  ehr: { name: "EHR", detail: "Patient charts", busy: "Connecting", done: "Connected" },
  ctms: { name: "CTMS", detail: "Site patients and studies", busy: "Connecting", done: "Connected" },
  past: { name: "Past ad leads", detail: "Exported from earlier campaigns", busy: "Importing", done: "Imported" },
  ads: { name: "Meta and Google ads", detail: "Created and run by Bond", busy: "Launching", done: "Live" },
};

function SetupCard({ link }: { link: Frame["link"] }) {
  const all = Object.values(link).every((l) => l === "on");
  return (
    <>
      <CardTitle
        right={
          <span className="relative h-5 w-24 shrink-0 text-right text-[11px] font-semibold">
            <span className={`absolute right-0 top-0.5 flex items-center gap-1 text-gray-500 transition-opacity duration-300 ${all ? "opacity-0" : "opacity-100"}`}>
              <LoaderCircle className="w-3.5 h-3.5 motion-safe:animate-spin" />
              Setting up
            </span>
            <span className={`absolute right-0 top-0 flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-green-700 ring-1 ring-green-200 transition-opacity duration-300 ${all ? "opacity-100" : "opacity-0"}`}>
              <Check className="w-3 h-3" strokeWidth={3} />
              All set
            </span>
          </span>
        }
      >
        <span className="text-[13px] font-semibold text-gray-900">Connect your patient sources</span>
      </CardTitle>
      <ul className="space-y-1.5 px-4 pt-3">
        {SOURCES.map(({ id }) => {
          const state = link[id];
          return (
            <li
              key={id}
              className={`flex h-[38px] items-center gap-2.5 rounded-lg px-2.5 transition-[background-color,opacity] duration-300 ${
                state === "off" ? "opacity-50" : "opacity-100"
              } ${state === "connecting" ? "bg-bond-primary/5" : "bg-gray-50"}`}
            >
              <span className={`flex w-6 h-6 shrink-0 items-center justify-center rounded-md [&_svg]:w-3.5 [&_svg]:h-3.5 ${state === "off" ? "bg-gray-100 text-gray-400" : SOURCE_ICON[id].tone}`}>
                {SOURCE_ICON[id].icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-semibold leading-tight text-gray-900">{SETUP[id].name}</span>
                <span className="block truncate text-[11px] leading-tight text-gray-500">{SETUP[id].detail}</span>
              </span>
              <span className="relative flex h-5 w-[78px] shrink-0 items-center justify-end">
                <span className={`flex items-center gap-1 text-[11px] font-medium text-bond-primary-dark transition-opacity duration-200 ${state === "connecting" ? "opacity-100" : "opacity-0"}`}>
                  <LoaderCircle className="w-3.5 h-3.5 motion-safe:animate-spin" />
                  {SETUP[id].busy}
                </span>
                <span
                  className={`absolute right-0 flex items-center gap-1 rounded-full bg-green-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-green-800 transition-[opacity,scale] duration-300 motion-reduce:transition-none ${
                    state === "on" ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                  {SETUP[id].done}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const QUEUE: { p: Patient; from: string; verdict: string; tone: string }[] = [
  { p: "a", from: "EHR", verdict: "Matched", tone: "bg-bond-primary/10 text-bond-primary-dark" },
  { p: "c", from: "CTMS", verdict: "Exclusion triggered", tone: "bg-gray-100 text-gray-600" },
  { p: "d", from: "Past ad lead", verdict: "Matched", tone: "bg-bond-primary/10 text-bond-primary-dark" },
];

function QueueCard({ view }: { view: ViewQueue }) {
  const listed = view !== "watching";
  return (
    <div className="relative h-full">
      {/* Watching: nothing in the queue yet */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center transition-[opacity,scale] duration-500 motion-reduce:transition-none ${
          listed ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative flex w-12 h-12 items-center justify-center rounded-2xl bg-white ring-1 ring-gray-200 shadow-md">
          <BondMark size={34} />
          <span className="absolute -inset-1.5 rounded-[20px] border border-bond-primary/30 motion-safe:animate-pulse" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-gray-900">Bond is finding patients</p>
          <p className="mt-1 text-[12px] leading-snug text-gray-500">Every new chart and lead is screened against the protocol</p>
        </div>
      </div>
      {/* Screening: each patient checked against the protocol */}
      <div className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${listed ? "opacity-100" : "opacity-0"}`}>
        <CardTitle right={<span className="hidden sm:inline text-[11px] text-gray-500 whitespace-nowrap">Type 2 diabetes study</span>}>
          <span className="text-[13px] font-semibold text-gray-900">Screening against the protocol</span>
        </CardTitle>
        <ul className="space-y-1.5 px-4 pt-3">
          {QUEUE.map((row, i) => (
            <Later key={row.p} on={listed} delay={i * 220} className="flex h-10 items-center gap-2 rounded-lg bg-gray-50 px-3">
              <span className={`w-2 h-2 shrink-0 rounded-full ${PATIENT[row.p].tone}`} />
              <span className="text-[12.5px] font-semibold text-gray-900 whitespace-nowrap">{PATIENT[row.p].name}</span>
              <span className="flex-1 truncate text-[11px] text-gray-500">{row.from}</span>
              <span className="relative flex h-5 shrink-0 items-center">
                <LoaderCircle className={`w-4 h-4 text-bond-primary transition-opacity duration-200 motion-safe:animate-spin ${view === "screening" ? "opacity-100" : "opacity-0"}`} />
                <span
                  className={`absolute right-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold transition-[opacity,scale] duration-300 motion-reduce:transition-none ${row.tone} ${
                    view === "screened" ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: view === "screened" ? `${i * 250}ms` : "0ms" }}
                >
                  {row.verdict}
                </span>
              </span>
            </Later>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CRITERIA = [
  { label: "Type 2 diabetes", evidence: "Problem list", verdict: "Met" },
  { label: "A1c 8.2%", evidence: "Lab result", verdict: "Met" },
  { label: "Age 58", evidence: "Chart", verdict: "Met" },
  { label: "Insulin in last 3 months", evidence: "Medication list", verdict: "Cleared" },
];

const STAGE_TONE = {
  Lead: "bg-teal-100 text-teal-800",
  Matched: "bg-bond-primary/10 text-bond-primary-dark",
  Contacted: "bg-amber-100 text-amber-800",
  Scheduled: "bg-green-100 text-green-800",
};

function PatientCardA({ view }: { view: ViewA }) {
  const stage = view === "chart" ? "Matched" : view === "booked" ? "Scheduled" : "Contacted";
  const texting = view !== "chart";
  return (
    <>
      <CardHeader patient="a" source="From your EHR" stage={stage} />
      <View on={view === "chart"}>
        <p className="mb-2 text-[11px] font-medium text-gray-500">Checked against the protocol, with evidence</p>
        <ul className="space-y-1.5">
          {CRITERIA.map((c, i) => (
            <li key={c.label} className="flex h-[30px] items-center gap-2 rounded-lg bg-gray-50 px-3">
              <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium text-gray-900">{c.label}</span>
              <span className="hidden min-[400px]:inline text-[11px] text-gray-500 whitespace-nowrap">{c.evidence}</span>
              <Verdict on={view === "chart"} delay={350 + i * 380} label={c.verdict} />
            </li>
          ))}
        </ul>
      </View>
      <View on={texting}>
        <div className="flex h-full flex-col gap-2">
          <Bubble on={texting} delay={150} from="bond">
            Hi, it&apos;s the research team at your clinic. You may qualify for a type 2 diabetes study. Can we ask a few questions?
          </Bubble>
          <Bubble on={texting} delay={1000} from="patient">Yes</Bubble>
          <div className="mt-auto flex items-end justify-between gap-2">
            <Later
              on={view === "qualified" || view === "booked"}
              delay={0}
              className="flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-2.5 py-1 text-[11.5px] font-semibold text-green-700 whitespace-nowrap"
            >
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
              Likely qualified
            </Later>
            <Bubble on={view === "booked"} delay={0} from="bond">
              You&apos;re booked for Tue 10:30 AM.
            </Bubble>
          </div>
        </div>
      </View>
    </>
  );
}

function PatientCardB({ view }: { view: ViewB }) {
  const stage = view === "lead" ? "Lead" : view === "booked" ? "Scheduled" : "Contacted";
  const calling = view !== "lead";
  return (
    <>
      <CardHeader patient="b" source="Meta ad lead · just now" stage={stage} />
      <View on={view === "lead"}>
        <div className="flex h-full flex-col justify-center gap-3">
          <div className="flex items-center gap-3 rounded-xl bg-linear-to-br from-teal-50 to-bond-primary/5 border border-teal-100 p-3">
            <span className="flex w-14 h-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-teal-500 to-bond-primary text-white">
              <Play className="w-4 h-4 fill-current" />
            </span>
            <span className="min-w-0">
              <span className="block text-[12.5px] font-semibold text-gray-900">Video ad for the study</span>
              <span className="block text-[11px] text-gray-500">Created and run by Bond</span>
            </span>
          </div>
          <Later on={view === "lead"} delay={450} className="flex items-center gap-2 text-[12px] font-medium text-teal-700">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-teal-500 motion-safe:animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-teal-500" />
            </span>
            New lead. Calling immediately.
          </Later>
        </div>
      </View>
      <View on={calling}>
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-5 items-center gap-2">
            <span className="flex w-5 h-5 items-center justify-center rounded-full bg-teal-500 text-white">
              <Phone className="w-3 h-3" />
            </span>
            <span className="text-[11px] font-medium text-gray-500">{view === "booked" ? "Agent call" : "Calling now"}</span>
            <Waveform on={view === "call"} />
          </div>
          <Bubble on={calling} delay={200} from="bond">
            Hi, this is an automated assistant calling about the diabetes study you asked about. Do you have a few minutes?
          </Bubble>
          <Bubble on={calling} delay={1200} from="patient">Yes, I do</Bubble>
          <div className="mt-auto flex flex-wrap items-center gap-1.5">
            <Later
              on={view === "booked"}
              delay={0}
              className="flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-2.5 py-1 text-[11.5px] font-semibold text-green-700 whitespace-nowrap"
            >
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
              Answered · Qualified
            </Later>
            <Later
              on={view === "booked"}
              delay={350}
              className="flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-2.5 py-1 text-[11.5px] font-medium text-gray-700 whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-bond-primary" />
              Booked on the call
            </Later>
          </div>
        </div>
      </View>
    </>
  );
}

function Verdict({ on, delay, label }: { on: boolean; delay: number; label: string }) {
  return (
    <span
      className={`flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-green-800 transition-[opacity,scale] duration-300 motion-reduce:transition-none ${
        on ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
    >
      <Check className="w-3 h-3" strokeWidth={3} />
      {label}
    </span>
  );
}

function Bubble({ on, delay, from, children }: { on: boolean; delay: number; from: "bond" | "patient"; children: ReactNode }) {
  return (
    <Later
      on={on}
      delay={delay}
      className={
        from === "bond"
          ? "self-end max-w-[85%] rounded-2xl rounded-br-md bg-bond-primary px-3 py-1.5 text-[12px] leading-snug text-white"
          : "self-start rounded-2xl rounded-bl-md bg-gray-100 px-3 py-1.5 text-[12px] text-gray-800"
      }
    >
      {children}
    </Later>
  );
}

function Waveform({ on }: { on: boolean }) {
  return (
    <span className={`ml-auto flex h-4 items-center gap-[3px] transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`}>
      {[0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.8].map((h, i) => (
        <span
          key={i}
          className="w-[3px] h-full origin-center rounded-full bg-teal-500 motion-safe:animate-[voice_0.9s_ease-in-out_infinite]"
          style={{ scale: `1 ${h}`, animationDelay: `${i * 0.11}s` }}
        />
      ))}
    </span>
  );
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const SLOT_WORD: Record<Exclude<Slot, "none">, { word: string; tone: string }> = {
  scheduled: { word: "Scheduled", tone: "bg-bond-primary/10 text-bond-primary-dark" },
  screened: { word: "Screened", tone: "bg-gray-100 text-gray-700" },
  enrolled: { word: "Enrolled", tone: "bg-green-500 text-white" },
};

function Calendar({ slots, afterVisit }: { slots: Frame["slots"]; afterVisit: boolean }) {
  const chip = (p: "a" | "b", time: string) => {
    const state = slots[p];
    const word = SLOT_WORD[state === "none" ? "scheduled" : state];
    return (
      <div
        className={`mt-1 rounded-lg border px-2 py-1 text-left transition-[opacity,scale,background-color,border-color] duration-500 motion-reduce:transition-none ${
          state === "none" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        } ${state === "enrolled" ? "bg-green-50 border-green-300" : "bg-white border-bond-primary/30"}`}
      >
        <span className="block text-[10.5px] font-semibold text-gray-900 leading-tight whitespace-nowrap">{time}</span>
        <span className="block text-[10px] text-gray-500 leading-tight truncate">{PATIENT[p].id} · Dana</span>
        <span key={state} className={`mt-0.5 inline-block rounded px-1 text-[9.5px] font-semibold motion-safe:animate-[pop_0.35s_ease-out] ${word.tone}`}>
          {word.word}
        </span>
      </div>
    );
  };
  return (
    <div className="absolute inset-x-[4%] rounded-xl bg-white/90 border border-gray-200 shadow-sm px-3 pt-1.5 pb-2" style={{ top: CAL_TOP, bottom: 16 }}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold text-gray-700 truncate">
          <span className="sm:hidden">Your calendar</span>
          <span className="hidden sm:inline">Screening visits · your calendar</span>
        </span>
        <span className="relative h-4 shrink-0 text-[10.5px] font-medium text-gray-500">
          <span className={`block transition-opacity duration-300 ${afterVisit ? "opacity-0" : "opacity-100"}`}>This week</span>
          <span className={`absolute right-0 top-0 whitespace-nowrap text-green-700 transition-opacity duration-300 ${afterVisit ? "opacity-100" : "opacity-0"}`}>
            After the screening visit
          </span>
        </span>
      </div>
      <div className="mt-1 grid grid-cols-3 sm:grid-cols-5 gap-2">
        {DAYS.map((d, i) => (
          <div key={d} className={`min-w-0 ${i > 2 ? "hidden sm:block" : ""}`}>
            <span className="block text-[10px] font-medium text-gray-400">{d}</span>
            {d === "Tue" && chip("a", "Tue 10:30 AM")}
            {d === "Wed" && chip("b", "Wed 2:00 PM")}
          </div>
        ))}
      </div>
    </div>
  );
}
