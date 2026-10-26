/**
 * Classes that turn a table with a few columns into one card per row below `sm`: the header row is hidden, the
 * first cell becomes the card's title, and each cell after it sits on its own line under its column name, which it
 * reads from the cell's `data-label`. Three or four squeezed columns otherwise wrap to a word or two per line on a
 * phone, or get cut off. Pass `stacked` to ScrollTable too, so it drops its frame around the cards.
 * `display: block` drops table semantics in Safari, so stacked tables also set ARIA table roles.
 */
export const stacked = {
  table: "max-sm:block",
  thead: "max-sm:hidden",
  tbody: "max-sm:block max-sm:space-y-2.5",
  tr: "max-sm:block max-sm:rounded-2xl max-sm:border max-sm:border-gray-200 max-sm:bg-white max-sm:p-4",
  firstCell:
    "max-sm:block max-sm:border-b max-sm:border-gray-100 max-sm:p-0 max-sm:pb-2.5 max-sm:text-base max-sm:font-semibold max-sm:text-gray-900",
  cell: "max-sm:block max-sm:p-0 max-sm:pt-2.5 max-sm:text-left max-sm:whitespace-normal max-sm:normal-nums max-sm:before:mb-0.5 max-sm:before:block max-sm:before:text-[13px] max-sm:before:font-medium max-sm:before:leading-5 max-sm:before:text-gray-500 max-sm:before:content-[attr(data-label)]",
};

export const roles = {
  table: { role: "table" },
  rowgroup: { role: "rowgroup" },
  row: { role: "row" },
  columnheader: { role: "columnheader" },
  cell: { role: "cell" },
} as const;

/** Shared header and cell styles for content tables (Blocks.tsx) and the trial data tables (TrialData.tsx). */
export const tableStyle = {
  // tabular-nums goes on number cells only: Inter's tabular figures also widen hyphens ("pre - screen")
  table: "w-full text-sm",
  num: "text-right whitespace-nowrap tabular-nums",
  /** Phone cells of tables that stay tables because every value is short: 4px apart, so four columns fit 360px */
  compactPad: "max-sm:px-1 max-sm:first:pl-3 max-sm:last:pr-3 max-sm:text-[13px]",
  thead: "border-b border-gray-200 bg-gray-50 text-left",
  th: "px-4 py-2.5 align-bottom text-[13px] font-semibold leading-snug text-gray-700",
  tr: "border-t border-gray-200/70 align-top",
  td: "px-4 py-3 leading-relaxed",
  caption: "mb-3 text-[15px] font-semibold leading-snug text-gray-900",
  note: "mt-2.5 text-xs leading-relaxed text-gray-500",
  /** First column pinned while the rest scrolls sideways */
  pin: "sticky left-0 z-[1] shadow-[1px_0_0_var(--color-gray-200),6px_0_8px_-6px_rgb(0_0_0/0.12)]",
};
