import React from "react";
import useButton from "./useButton";
import { Loader } from "react-feather";
import { ButtonProps } from "./Button.model";

import Flex from "components/primitives/Flex";

export function Button({
  className,
  intent = "primary",
  appearance = "fill",
  color,
  size = "medium",
  type = "button",
  shape,
  onClick,
  disabled = false,
  loading = false,
  active = false,
  icon: rawIcon,
  children,
  ...props
}: ButtonProps) {
  const { props: buttonProps, icon, isLoading } = useButton({
    className,
    intent,
    appearance,
    color,
    type,
    size,
    shape,
    onClick,
    disabled,
    loading,
    active,
    icon: rawIcon,
  });

  return (
    <Flex is="button" center {...buttonProps} {...props}>
      {isLoading && <Loader className="jnpr-button-icon jnpr-spinner" />}
      {!isLoading && icon}
      {children}
    </Flex>
  );
}

export default Button;
