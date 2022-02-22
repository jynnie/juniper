import React from "react";
import cn from "classnames";

import { BasicText } from "./BasicText";

import type { BasicTextProps } from "./Text.model";

export function Codeblock({ className, children, ...props }: BasicTextProps) {
  return (
    <BasicText is="pre" className={cn(className, "jnpr-codeblock")} {...props}>
      {children}
    </BasicText>
  );
}

export default Codeblock;
