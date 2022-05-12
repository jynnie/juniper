import React, { useMemo, useRef, useState } from "react";
import Box from "ui-box";
import cn from "classnames";
import { Check, ChevronDown, X } from "react-feather";
import { usePopper as useRawPopper } from "react-popper";
import ReactDOM from "react-dom";
import { Flex, Text } from "components";
import { sp } from "utils";
import { nanoid } from "nanoid";

// FIXME: Move to models
export interface Option {
  value: unknown;
  label: string;
}

interface ComboboxProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: Option[];
  value?: unknown;
  onChange?: (value: unknown) => void;
  isClearable?: boolean;
}

// FIXME: Move to helpers
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

// FIXME: Move to hooks
function usePopper() {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = useRawPopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [OFFSET, SAME_WIDTH],
  });
  return { setReferenceElement, setPopperElement, styles, attributes };
}

// TODO: Decide name Combobox or Autocomplete or Search
// It's very common that this kind of pattern is called
// a "select", even though technically, it has a
// different kind of implementation/UX than the
// traditional select... I'm not sure if it's worth
// calling it by what it "technically" is.
export function Combobox({
  className,
  placeholder,
  disabled,
  options,
  value,
  onChange,
  isClearable,
}: ComboboxProps) {
  const { setReferenceElement, setPopperElement, styles, attributes } =
    usePopper();
  const inputRef = useRef<HTMLInputElement>();

  // FIXME: Move to hooks
  const uuid = useMemo(() => nanoid(), []);

  // FIXME: Move to single hook for useCombobox
  const selectedOptionIdx = useMemo(
    () => (options || []).findIndex((o) => o.value === value),
    [options, value],
  );
  const selectedOption = options?.[selectedOptionIdx];

  const [inputValue, setInputValue] = useState(selectedOption?.label || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (option: Option) => () => {
    onChange?.(option.value);
    setInputValue(option.label);
  };

  function handleClear() {
    onChange?.(undefined);
    setInputValue("");
    inputRef.current?.select();
  }

  function handleFocus() {
    inputRef.current?.select();
    setIsFocused(true);
  }

  // TODO: Search & filter
  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(ev.target.value);
  }

  // TODO: Handle focusing on options via up/down arrows

  return (
    <Box
      className={cn(className, "jnpr-select", { disabled: !!disabled })}
      ref={setReferenceElement}
    >
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-controls={`combobox-list-${uuid}`}
        aria-expanded={isFocused}
        aria-autocomplete="both"
        aria-owns="results"
        aria-activedescendant={`combobox-option-${selectedOptionIdx}`}
        placeholder={placeholder || "Search..."}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
      />

      <Flex gap={sp(4)} align="center">
        {isClearable && value !== undefined && (
          <button
            className="jnpr-select-iconButton"
            disabled={disabled}
            onClick={handleClear}
          >
            <X width="var(--sp-16)" />
          </button>
        )}
        <button
          className="jnpr-select-iconButton"
          disabled={disabled}
          tabIndex={-1}
        >
          <ChevronDown
            className="jnpr-select-chevronIcon"
            width="var(--sp-16)"
          />
        </button>
      </Flex>

      {typeof window !== "undefined" &&
        ReactDOM.createPortal(
          <ul
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className={cn("jnpr-select-optionContainer", {
              visible: isFocused,
            })}
            id={`combobox-list-${uuid}`}
            role="listbox"
          >
            {(options || []).map((option, i) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={i}
                  id={`combobox-option-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  className={cn("jnpr-select-singleOption", {
                    selected: isSelected,
                  })}
                  onClick={handleSelect(option)}
                >
                  <Text>{option.label}</Text>
                  {isSelected && <Check width={16} />}
                </li>
              );
            })}
          </ul>,
          document.body,
        )}
    </Box>
  );
}
