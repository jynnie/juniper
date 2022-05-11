import React, { useMemo, useState } from "react";
import Box from "ui-box";
import cn from "classnames";
import { Check, ChevronDown, X } from "react-feather";
import { usePopper as useRawPopper } from "react-popper";
import ReactDOM from "react-dom";
import { Flex, Text } from "components";
import { sp } from "utils";

export interface SelectOption {
  value: unknown;
  label: string;
}

interface SelectProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: SelectOption[];
  value?: unknown;
  onChange?: (value: unknown) => void;
  isClearable?: boolean;
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

function usePopper() {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = useRawPopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [OFFSET, SAME_WIDTH],
  });
  return { setReferenceElement, setPopperElement, styles, attributes };
}

export function Select({
  className,
  placeholder,
  disabled,
  options,
  value,
  onChange,
  isClearable,
}: SelectProps) {
  const { setReferenceElement, setPopperElement, styles, attributes } =
    usePopper();

  const selectedOption = useMemo(
    () => (options || []).find((o) => o.value === value),
    [options, value],
  );

  const [inputValue, setInputValue] = useState(selectedOption?.label || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (option: SelectOption) => () => {
    onChange?.(option.value);
    setInputValue(option.label);
  };

  function handleClear() {
    onChange?.(undefined);
    setInputValue("");
  }

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    ev.target.select();
    setIsFocused(true);
  }

  // TODO: Search & filter
  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(ev.target.value);
  }

  return (
    <Box
      className={cn(className, "jnpr-select", { disabled: !!disabled })}
      ref={setReferenceElement}
    >
      <input
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
        <button className="jnpr-select-iconButton" disabled={disabled}>
          <ChevronDown
            className="jnpr-select-chevronIcon"
            width="var(--sp-16)"
          />
        </button>
      </Flex>

      {ReactDOM.createPortal(
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cn("jnpr-select-optionContainer", { visible: isFocused })}
        >
          {(options || []).map((option, i) => {
            const isSelected = option.value === value;
            return (
              <div
                key={i}
                className={cn("jnpr-select-singleOption", {
                  selected: isSelected,
                })}
                onClick={handleSelect(option)}
              >
                <Text>{option.label}</Text>
                {isSelected && <Check width={16} />}
              </div>
            );
          })}
        </div>,
        document.body,
      )}
    </Box>
  );
}
