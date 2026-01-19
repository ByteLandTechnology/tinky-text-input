import { useState, useEffect } from "react";
import { Text } from "tinky";
import { useKeypress, type Key } from "tinky-keypress";
import ansis from "ansis";
import type { TextInputProps } from "./TextInput.js";

/**
 * Props for the {@link ControlledTextInput} component.
 */
export interface ControlledTextInputProps extends TextInputProps {
  /**
   * Value to display in a text input.
   */
  readonly value: string;

  /**
   * Function to call when value updates.
   */
  readonly onChange: (value: string) => void;
}

/**
 * A controlled text input component that renders a text input field.
 *
 * @param props - The properties for the component.
 * @returns The rendered text input component.
 */
export function ControlledTextInput({
  value: originalValue,
  placeholder = "",
  focus = true,
  mask,
  highlightPastedText = false,
  showCursor = true,
  onChange,
  onSubmit,
}: ControlledTextInputProps) {
  const [state, setState] = useState({
    cursorOffset: (originalValue || "").length,
    cursorWidth: 0,
  });

  const { cursorOffset, cursorWidth } = state;

  useEffect(() => {
    setState((previousState) => {
      if (!focus || !showCursor) {
        return previousState;
      }

      const newValue = originalValue || "";

      if (previousState.cursorOffset > newValue.length - 1) {
        return {
          cursorOffset: newValue.length,
          cursorWidth: 0,
        };
      }

      return previousState;
    });
  }, [originalValue, focus, showCursor]);

  const cursorActualWidth = highlightPastedText ? cursorWidth : 0;

  const value = mask ? mask.repeat(originalValue.length) : originalValue;
  let renderedValue = value;
  let renderedPlaceholder = placeholder ? ansis.gray(placeholder) : undefined;

  // Fake mouse cursor, because it's too inconvenient to deal with actual cursor and ansi escapes
  if (showCursor && focus) {
    renderedPlaceholder =
      placeholder.length > 0
        ? ansis.inverse(placeholder[0]) + ansis.gray(placeholder.slice(1))
        : ansis.inverse(" ");

    renderedValue = value.length > 0 ? "" : ansis.inverse(" ");

    let i = 0;

    for (const char of value) {
      renderedValue +=
        i >= cursorOffset - cursorActualWidth && i <= cursorOffset
          ? ansis.inverse(char)
          : char;

      i++;
    }

    if (value.length > 0 && cursorOffset === value.length) {
      renderedValue += ansis.inverse(" ");
    }
  }

  useKeypress(
    (key: Key) => {
      if (
        key.name === "up" ||
        key.name === "down" ||
        (key.ctrl && key.name === "c") ||
        key.name === "tab" ||
        (key.shift && key.name === "tab")
      ) {
        return;
      }

      if (key.name === "return" || key.name === "enter") {
        if (onSubmit) {
          onSubmit(originalValue);
        }

        return;
      }

      let nextCursorOffset = cursorOffset;
      let nextValue = originalValue;
      let nextCursorWidth = 0;
      const input = key.sequence;

      if (key.name === "left") {
        if (showCursor) {
          nextCursorOffset--;
        }
      } else if (key.name === "right") {
        if (showCursor) {
          nextCursorOffset++;
        }
      } else if (key.name === "backspace" || key.name === "delete") {
        if (cursorOffset > 0) {
          nextValue =
            originalValue.slice(0, cursorOffset - 1) +
            originalValue.slice(cursorOffset, originalValue.length);

          nextCursorOffset--;
        }
      } else {
        if (key.insertable && !key.ctrl && !key.meta && key.name !== "escape") {
          nextValue =
            originalValue.slice(0, cursorOffset) +
            input +
            originalValue.slice(cursorOffset, originalValue.length);

          nextCursorOffset += input.length;

          if (input.length > 1) {
            nextCursorWidth = input.length;
          }
        }
      }

      if (cursorOffset < 0) {
        nextCursorOffset = 0;
      }

      if (cursorOffset > originalValue.length) {
        nextCursorOffset = originalValue.length;
      }

      setState({
        cursorOffset: nextCursorOffset,
        cursorWidth: nextCursorWidth,
      });

      if (nextValue !== originalValue) {
        onChange(nextValue);
      }
    },
    { isActive: focus },
  );

  return (
    <Text>
      {placeholder
        ? value.length > 0
          ? renderedValue
          : renderedPlaceholder
        : renderedValue}
    </Text>
  );
}
