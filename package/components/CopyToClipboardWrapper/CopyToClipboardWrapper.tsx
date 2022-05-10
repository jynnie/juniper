import { useToasts } from "components/Toast/useToasts";
import React from "react";
import Box, { BoxProps } from "ui-box";

interface CopyToClipboardWrapperProps extends BoxProps<React.ElementType> {
  value: string;
  stopPropagating?: boolean;
}

export function CopyToClipboardWrapper({
  value,
  stopPropagating,
  children,
  ...props
}: CopyToClipboardWrapperProps): React.ReactElement {
  // TODO: Add notification
  const toast = useToasts();

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.add("Copied to clipboard!");
  };

  const handleStopPropagation = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    handleCopy();
  };

  const handleClick = (e: Event) => {
    if (stopPropagating) {
      handleStopPropagation(e);
    }
    if (!stopPropagating) {
      handleCopy();
    }
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Box
      is="span"
      position="relative"
      onClick={(e: Event) => handleClick(e)}
      cursor="pointer"
      {...props}
    >
      {children}
    </Box>
  );
}

export default CopyToClipboardWrapper;
