import React, { useEffect, useState } from "react";
import Box, { BoxProps } from "ui-box";
import { Text } from "../Text";
import cn from "classnames";
import { X } from "react-feather";

interface ToastProps extends BoxProps<"div"> {
  className?: string;
}

const TOAST_TIME = 2500;

export function Toast({ className, children, ...props }: ToastProps) {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLive(false), TOAST_TIME);
  }, []);

  if (!isLive) return null;

  return (
    <Box className={cn(className, "jnpr-toast")} {...props}>
      <Text className="jnpr-toast-text">{children}</Text>
      <X className="jnpr-toast-x" onClick={() => setIsLive(false)} />
    </Box>
  );
}

export default Toast;
