import React from "react";
import cn from "classnames";
import type {
  ButtonOptions,
  ButtonInstance,
  ButtonClickEvt,
  ButtonKeyEvt,
} from "./Button.model";

// TODO: Color prop?

export function useButton({
  className,
  classPrefix = "jnpr-button",
  intent = "primary",
  appearance = "fill",
  color,
  type = "button",
  size = "medium",
  shape,
  onClick,
  disabled = false,
  loading = false,
  active = false,
  icon: rawIcon,
}: ButtonOptions): ButtonInstance {
  const [isLoading, setIsLoading] = React.useState(loading);
  const [isActive, setIsActive] = React.useState(active);
  const isBusy = disabled || isLoading;

  const icon =
    rawIcon &&
    React.cloneElement(rawIcon, {
      className: cn(rawIcon.props?.className, "jnpr-button-icon"),
    });

  React.useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleClick: ButtonClickEvt = (evt) => {
    if (isBusy || !onClick) return;

    let onClickResult = null;
    if (onClick instanceof Function) onClickResult = onClick(evt);

    const isPromise = onClickResult instanceof Promise;
    if (isPromise) {
      setIsLoading(true);
      onClickResult.then(() => {
        setIsLoading(false);
      });
    }
  };

  const handleKeyDown: ButtonKeyEvt = (evt) => {
    if (evt.code === "Space" || evt.code === "Enter") {
      evt.preventDefault();
      handleClick(evt);
      setIsActive(true);
    }
  };

  const handleKeyUp: ButtonKeyEvt = (evt) => {
    if (evt.code === "Space" || evt.code === "Enter") {
      setIsActive(false);
    }
  };

  const classPrefixHyphen = classPrefix ? classPrefix + "-" : "";

  const props = {
    role: "button",
    tabIndex: isBusy ? -1 : 0,
    className: cn(
      className,
      classPrefix,
      `${classPrefixHyphen}${size}`,
      `${classPrefixHyphen}${shape}`,
      `${classPrefixHyphen}${intent}`,
      `${classPrefixHyphen}${appearance}`,
      {
        disabled: disabled || isLoading,
        active: isActive,
        [`${classPrefixHyphen}${color}`]: !!color,
      },
    ),
    type: type,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
  };

  return {
    props,
    icon,
    isLoading,
    isDisabled: disabled || isLoading,
  };
}

export default useButton;
