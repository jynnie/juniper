import { nanoid } from "nanoid";
import { useMemo, useState } from "react";
import { usePopper as useRawPopper } from "react-popper";

export function useUUID(size?: number) {
  const uuid = useMemo(() => nanoid(size), []);
  return uuid;
}

const SAME_WIDTH = {
  name: "sameWidth",
  enabled: true,
  phase: "beforeWrite" as any,
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
  },
};

const OFFSET = {
  name: "offset",
  options: {
    offset: [0, 8],
  },
};

export function usePopper() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = useRawPopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [OFFSET, SAME_WIDTH],
  });
  return { setReferenceElement, setPopperElement, styles, attributes };
}
