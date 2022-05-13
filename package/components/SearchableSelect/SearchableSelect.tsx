import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { Check, ChevronDown, X } from "react-feather";
import ReactDOM from "react-dom";
import { Flex, Text } from "components";
import { sp } from "utils";
import { useUUID, usePopper } from "hooks";
import { Option } from "./SearchableSelect.model";
import { useSearchableSelect } from "./SearchableSelect.hooks";

interface SearchableSelectProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: Option[];
  value?: unknown;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: unknown) => void;
  isNotClearable?: boolean;
}

export function SearchableSelect({
  className,
  placeholder,
  disabled,
  options,
  value,
  onChange,
  isNotClearable,
}: SearchableSelectProps) {
  const { setReferenceElement, setPopperElement, styles, attributes } =
    usePopper();
  const uuid = useUUID(4);

  const {
    inputRef,
    isFocused,
    filteredOptions,
    selectedOption,
    selectedOptionIdx,
    focusedOptionIdx,
    searchValue,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleSelect,
    handleClear,
  } = useSearchableSelect(options, value, onChange);

  return (
    <Box
      className={cn(className, "jnpr-searchableSelect", {
        disabled: !!disabled,
      })}
      ref={setReferenceElement}
    >
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-controls={`combobox-list-:${uuid}:`}
        aria-expanded={isFocused}
        aria-autocomplete="both"
        aria-owns="results"
        aria-activedescendant={
          !selectedOption ? undefined : `combobox-option-${selectedOptionIdx}`
        }
        placeholder={placeholder || "Search..."}
        disabled={disabled}
        value={searchValue === null ? selectedOption?.label || "" : searchValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />

      <Flex gap={sp(4)} align="center">
        {!isNotClearable && value !== undefined && (
          <button
            className="jnpr-searchableSelect-iconButton"
            disabled={disabled}
            onClick={handleClear}
          >
            <X width="var(--sp-16)" />
          </button>
        )}
        <button
          className="jnpr-searchableSelect-iconButton"
          disabled={disabled}
          tabIndex={-1}
        >
          <ChevronDown
            className="jnpr-searchableSelect-chevronIcon"
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
            className={cn("jnpr-searchableSelect-optionContainer", {
              visible: isFocused,
            })}
            id={`combobox-list-:${uuid}:`}
            role="listbox"
          >
            {filteredOptions.map((option, i) => {
              const isSelected = option.value === value;
              const isFocused = focusedOptionIdx === i;
              // TODO: Handle really long labels
              return (
                <li
                  key={i}
                  id={`combobox-option-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  data-highlighted={isFocused}
                  className={cn("jnpr-searchableSelect-singleOption", {
                    selected: isSelected,
                    focused: isFocused,
                  })}
                  onClick={handleSelect(option)}
                >
                  <Text>{option.label}</Text>
                  {isSelected && <Check width={16} />}
                </li>
              );
            })}
            {filteredOptions.length === 0 && (
              <Text className="jnpr-searchableSelect-noResults">
                No Results
              </Text>
            )}
          </ul>,
          document.body,
        )}
    </Box>
  );
}
