import React from "react";
import Box, { BoxProps } from "ui-box";

export interface GridProps extends BoxProps<React.ElementType> {
  colNum?: number;
  rowNum?: number;
}

export function Grid({ colNum, rowNum, children, ...props }: GridProps) {
  const isColNumProvided = (colNum ?? false) !== false;
  const isRowNumProvided = (rowNum ?? false) !== false;

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={isColNumProvided ? `repeat(${colNum}, 1fr)` : null}
      gridTemplateRows={isRowNumProvided ? `repeat(${rowNum}, 1fr)` : null}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Grid;
