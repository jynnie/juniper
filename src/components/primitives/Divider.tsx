import React from "react";
import Box, { BoxProps } from "ui-box";

export interface DividerProps extends BoxProps<React.ElementType> {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  size?: string;
}

// TODO: Support line dividers and other styles too

export function Divider({
  sm,
  md,
  lg,
  xl,
  size,
  children,
  ...props
}: DividerProps) {
  let _size: string = size ?? "sm";
  if (sm) _size = "sm";
  else if (md) _size = "md";
  else if (lg) _size = "lg";
  else if (xl) _size = "xl";

  return (
    <Box
      minHeight={`var(--sp-${_size})`}
      minWidth={`var(--sp-${_size})`}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Divider;
