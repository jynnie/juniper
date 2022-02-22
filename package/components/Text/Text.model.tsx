import type { BoxProps } from "ui-box";
import { Color } from "models";

export interface BasicTextProps extends BoxProps<React.ElementType> {
  bold?: boolean;
  code?: boolean;
  small?: boolean;
  highlight?: boolean;
  color?: Color;
  textColor?: string;
  intent?: "primary" | "secondary" | "success" | "warning" | "danger";
}

export interface TextProps extends BasicTextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
}

export interface HeadingProps extends BasicTextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
}

export interface ParagraphProps extends BasicTextProps {}

export interface LinkProps extends BasicTextProps {}
