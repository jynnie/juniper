import React, { useState } from "react";
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
  const [showTip, setShowTip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setShowTip(true);

    setTimeout(() => {
      setShowTip(false);
    }, 2000);
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
      {/* {showTip && <Tip className="successTip">{successText}</Tip>} */}
      {children}
    </Box>
  );
}

export default CopyToClipboardWrapper;
