import React from "react";
import cn from "classnames";

import { BasicText } from "./BasicText";

import type { LinkProps } from "./Text.model";

export function Link({ className, href, children, ...props }: LinkProps) {
  return (
    <BasicText
      is="a"
      className={cn(className, "jnpr-link")}
      href={href}
      {...props}
    >
      {children}
    </BasicText>
  );
}

export default Link;
