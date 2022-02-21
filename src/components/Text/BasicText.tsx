import React from "react";
import Box from "ui-box";
import cn from "classnames";

import type { BasicTextProps } from "./Text.model";

export function BasicText({
  className,
  bold = false,
  code = false,
  small = false,
  mark = false,
  secondary = false,
  color,
  textColor,
  children,
  ...props
}: BasicTextProps) {
  let is: BasicTextProps["is"] = "span";
  if (code) is = "code";
  else if (mark) is = "mark";

  return (
    <Box
      is={is}
      className={cn(className, "jnpr-text", {
        [`jnpr-text-${color}`]: !!color,
        [`jnpr-text-bold`]: bold,
        [`jnpr-text-small`]: small,
        [`jnpr-text-mark`]: mark,
        [`jnpr-code`]: code,
        [`jnpr-text-secondary`]: secondary,
      })}
      color={textColor}
      {...props}
    >
      {children}
    </Box>
  );
}

export default BasicText;
