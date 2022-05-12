import React, { useMemo, useRef, useState } from "react";
import Box from "ui-box";
import cn from "classnames";
import { Check, ChevronDown, X } from "react-feather";
import { usePopper as useRawPopper } from "react-popper";
import ReactDOM from "react-dom";
import { Flex, Text } from "components";
import { sp } from "utils";
import { useUUID } from "hooks";

// FIXME: Move to models
export interface Option {
  value: unknown;
  label: string;
}

interface SearchableSelectProps {
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

export function SearchableSelect({
  className,
  placeholder,
  disabled,
  options,
  value,
  onChange,
  isClearable,
}: SearchableSelectProps) {
  const { setReferenceElement, setPopperElement, styles, attributes } =
    usePopper();
  const inputRef = useRef<HTMLInputElement>();
  const uuid = useUUID();

  // FIXME: Move to single hook for useCombobox
  const selectedOptionIdx = useMemo(
    () => (options || []).findIndex((o) => o.value === value),
    [options, value],
  );
  const selectedOption: Option | undefined = options?.[selectedOptionIdx];

  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function isMatchingSearchValue(o: Option, search: string): boolean {
    // All space separated search terms need to match the label somewhere
    const searchTerms = search.toLowerCase().split(" ");
    const label = o.label.toLowerCase();

    let isMatching = true;
    for (const term of searchTerms) {
      if (!label.includes(term)) {
        isMatching = false;
        break;
      }
    }
    return isMatching;
  }

  const filteredOptions = useMemo(
    () => (options || []).filter((o) => isMatchingSearchValue(o, searchValue)),
    [options, searchValue],
  );

  const handleSelect = (option: Option) => () => {
    onChange?.(option.value);
    setSearchValue("");
  };

  function handleClear() {
    onChange?.(undefined);
    setSearchValue("");
    inputRef.current?.select();
  }

  function handleFocus() {
    inputRef.current?.select();
    setIsFocused(true);
  }

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(ev.target.value);
  }

  function handleBlur() {
    setIsFocused(false);
    setSearchValue("");
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
        aria-activedescendant={
          !selectedOption ? undefined : `combobox-option-${selectedOptionIdx}`
        }
        placeholder={placeholder || "Search..."}
        disabled={disabled}
        value={searchValue || selectedOption?.label || ""}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
            {filteredOptions.map((option, i) => {
              const isSelected = option.value === value;
              // TODO: Handle really long labels
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
