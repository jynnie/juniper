import React from "react";
import Box, { BoxProps } from "ui-box";
import cn from "classnames";

interface ToastContainerProps extends BoxProps<"div"> {
  className?: string;
}

export function ToastContainer({
  className,
  children,
  ...props
}: ToastContainerProps) {
  return (
    <Box
      className={cn(className, "jnpr-toastContainer")}
      id="jnpr-toastsRef"
      {...props}
    >
      {children}
    </Box>
  );
}
