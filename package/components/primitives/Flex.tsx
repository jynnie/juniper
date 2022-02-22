import React from "react";
import Box, { BoxProps } from "ui-box";

export interface FlexProps extends BoxProps<React.ElementType> {
  col?: boolean; // Flex column
  rv?: boolean; // Reverse direction
  inline?: boolean;
  center?: boolean;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | string;
  align?: "flex-start" | "flex-end" | "center" | string;
}

export function Flex({
  col = false,
  rv = false,
  inline = false,
  center = false,
  wrap = false,
  justify,
  align,
  children,
  ...props
}: FlexProps) {
  let direction: FlexProps["flexDirection"] = "row";
  if (col && !rv) direction = "column";
  if (col && !!rv) direction = "column-reverse";
  if (!col && !!rv) direction = "row-reverse";

  return (
    <Box
      flexDirection={direction}
      display={inline ? "flex-inline" : "flex"}
      justifyContent={center ? "center" : justify}
      alignItems={center ? "center" : align}
      flexWrap={wrap ? "wrap" : "nowrap"}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Flex;
