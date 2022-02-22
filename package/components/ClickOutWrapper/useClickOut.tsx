import React from "react";
import { UseClickOutProps } from "./ClickOutWrapper.model";

export function useClickOut({
  onClickOut,
}: UseClickOutProps): React.MutableRefObject<React.ReactElement> {
  const ref = React.useRef(null);

  const handleClick = (evt: MouseEvent) => {
    const path = evt.composedPath();

    let clickedOut = true;
    for (const element of path) {
      if (element === ref.current) {
        clickedOut = false;
        break;
      }
    }

    if (clickedOut) {
      if (onClickOut) onClickOut(evt);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
}

export default useClickOut;
