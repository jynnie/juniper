import React from "react";
import cn from "classnames";

import { BasicText } from "./BasicText";

import type { ParagraphProps } from "./Text.model";

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <BasicText is="p" className={cn(className, "jnpr-paragraph")} {...props}>
      {children}
    </BasicText>
  );
}

export const P = Paragraph;

export default Paragraph;
