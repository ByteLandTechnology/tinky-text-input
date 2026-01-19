import { useState } from "react";
import { ControlledTextInput } from "./ControlledTextInput.js";

/**
 * Props for the {@link TextInput} component.
 */
export interface TextInputProps {
  /**
   * Text to display when `value` is empty.
   */
  readonly placeholder?: string;

  /**
   * Listen to user's input. Useful in case there are multiple input components
   * at the same time and input must be "routed" to a specific component.
   *
   * @default true
   */
  readonly focus?: boolean;

  /**
   * Replace all chars and mask the value. Useful for password inputs.
   */
  readonly mask?: string;

  /**
   * Whether to show cursor and allow navigation inside text input with arrow keys.
   *
   * @default true
   */
  readonly showCursor?: boolean;

  /**
   * Highlight pasted text.
   *
   * @default false
   */
  readonly highlightPastedText?: boolean;

  /**
   * Function to call when `Enter` is pressed, where first argument is a value of the input.
   */
  readonly onSubmit?: (value: string) => void;

  /**
   * Initial value.
   *
   * @default ""
   */
  readonly initialValue?: string;
}

/**
 * An uncontrolled text input component that manages its own state.
 *
 * @param props - The properties for the component.
 * @returns The rendered text input component.
 */
export function TextInput({ initialValue = "", ...props }: TextInputProps) {
  const [value, setValue] = useState(initialValue);

  return <ControlledTextInput {...props} value={value} onChange={setValue} />;
}
