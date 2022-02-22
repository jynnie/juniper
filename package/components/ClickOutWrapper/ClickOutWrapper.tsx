import React from "react";
import Box from "ui-box";
import { ClickOutWrapperProps } from "./ClickOutWrapper.model";
import useClickOut from "./useClickOut";

export function ClickOutWrapper({
  onClickOut,
  children,
  ...props
}: ClickOutWrapperProps): React.ReactElement {
  const ref = useClickOut({ onClickOut });

  return (
    <Box is="span" ref={ref} {...props}>
      {children}
    </Box>
  );
}

export default ClickOutWrapper;
