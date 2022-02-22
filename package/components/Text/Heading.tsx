import React from "react";
import cn from "classnames";

import { BasicText } from "./BasicText";

import type { HeadingProps, BasicTextProps } from "./Text.model";

export function Heading({
  className,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  intent,
  children,
  ...props
}: HeadingProps) {
  let is: BasicTextProps["is"] = "h1";
  if (h1) is = "h1";
  else if (h2) is = "h2";
  else if (h3) is = "h3";
  else if (h4) is = "h4";
  else if (h5) is = "h5";
  else if (h6) is = "h6";

  return (
    <BasicText
      is={is}
      className={cn(className, "jnpr-heading", `jnpr-heading-${is}`, {
        [`jnpr-heading-${intent}`]: !!intent,
      })}
      {...props}
    >
      {children}
    </BasicText>
  );
}

export const H = Heading;

export default Heading;
