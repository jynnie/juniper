import React, { useMemo, useRef, useState } from "react";
import { Option } from "./SearchableSelect.model";

export function useSearchableSelect(
  options: Option[],
  value: unknown,
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: unknown) => void,
) {
  const inputRef = useRef<HTMLInputElement>();

  const selectedOptionIdx = useMemo(
    () => (options || []).findIndex((o) => o.value === value),
    [options, value],
  );
  const selectedOption: Option | undefined = options?.[selectedOptionIdx];

  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedOptionIdx, setFocusedOptionIdx] = useState<number | null>(null);

  function isMatchingSearchValue(o: Option, search: string): boolean {
    if (!search) return true;

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
    setSearchValue(null);
  };

  function handleClear() {
    onChange?.(undefined);
    setSearchValue("");
    handleFocus();
  }

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(ev.target.value);
  }

  function handleFocus() {
    inputRef.current?.select();
    setIsFocused(true);
    setFocusedOptionIdx(null);
  }

  function handleBlur() {
    setIsFocused(false);
    setSearchValue(null);
  }

  function handleKeyDown(ev: React.KeyboardEvent) {
    const isNoOptionFocused = focusedOptionIdx === null;

    if (ev.key === "ArrowDown") {
      const isLastOptionFocused =
        focusedOptionIdx === filteredOptions.length - 1;
      if (isNoOptionFocused || isLastOptionFocused) {
        setFocusedOptionIdx(0);
      } else {
        setFocusedOptionIdx(focusedOptionIdx + 1);
      }
    } else if (ev.key === "ArrowUp") {
      const isFirstOptionFocused = focusedOptionIdx === 0;
      if (isNoOptionFocused) return;
      if (isFirstOptionFocused) {
        setFocusedOptionIdx(filteredOptions.length - 1);
      } else {
        setFocusedOptionIdx(focusedOptionIdx - 1);
      }
    } else if (ev.key === "Enter") {
      const option = filteredOptions[focusedOptionIdx];
      if (!!option) handleSelect(option)();
      handleFocus();
    } else if (ev.key === "Escape") {
      handleFocus();
      // Special case where we want to hide the suggestions
      setIsFocused(false);
    }
  }

  return {
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
  };
}
