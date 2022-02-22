import { ReactElement } from "react";
import { BoxProps } from "ui-box";

export interface UseClickOutProps {
  onClickOut?: (evt: MouseEvent) => void;
}

export interface ClickOutWrapperProps extends BoxProps<React.ElementType> {
  onClickOut?: (evt: MouseEvent) => void;
}
