export type SIZE =
  | "xxxs"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "x2"
  | "xxxl"
  | "x3"
  | "x2p5"
  | "x4"
  | "x6"
  | "x8"
  | "x12"
  | "x16"
  | "x24"
  | "x32"
  | "x40"
  | "x48";

export function sp(size: SIZE | number): string {
  return `var(--sp-${size})`;
}
