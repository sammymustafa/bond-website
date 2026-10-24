/**
 * Classes that turn a table with a few columns into one card per row below `sm`: the header row is hidden and each
 * cell after the first sits on its own line under its column name, which it reads from the cell's `data-label`.
 * Three or four squeezed columns otherwise wrap to a word or two per line on a phone, or get cut off.
 * `display: block` drops table semantics in Safari, so stacked tables also set ARIA table roles.
 */
export const stacked = {
  table: "max-sm:block",
  thead: "max-sm:hidden",
  tbody: "max-sm:block",
  tr: "max-sm:block max-sm:px-4 max-sm:py-3 max-sm:first:border-t-0",
  firstCell: "max-sm:block max-sm:p-0",
  cell: "max-sm:block max-sm:p-0 max-sm:pt-2 max-sm:text-left max-sm:before:block max-sm:before:text-xs max-sm:before:font-semibold max-sm:before:uppercase max-sm:before:tracking-wide max-sm:before:text-gray-500 max-sm:before:content-[attr(data-label)]",
};

export const roles = {
  table: { role: "table" },
  rowgroup: { role: "rowgroup" },
  row: { role: "row" },
  columnheader: { role: "columnheader" },
  cell: { role: "cell" },
} as const;
