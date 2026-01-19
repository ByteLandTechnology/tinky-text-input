**tinky-text-input**

---

[简体中文](_media/README.zh-CN.md) | [日本語](_media/README.ja-JP.md)

# tinky-text-input

A text input component for [Tinky](https://github.com/ByteLandTechnology/tinky).

## Install

```bash
npm install tinky-text-input
```

## Usage

```tsx
import React, { useState } from "react";
import { render, Text } from "tinky";
import { TextInput } from "tinky-text-input";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <Box>
      <Box marginRight={1}>
        <Text>Enter your query:</Text>
      </Box>

      <TextInput value={query} onChange={setQuery} />
    </Box>
  );
}

render(<Search />);
```

## Props

### placeholder

Type: `string`

Text to display when `value` is empty.

### focus

Type: `boolean`\
Default: `true`

Listen to user's input. Useful in case there are multiple input components at the same time and input must be "routed" to a specific component.

### mask

Type: `string`

Replace all chars and mask the value. Useful for password inputs.

### showCursor

Type: `boolean`\
Default: `true`

Whether to show cursor and allow navigation inside text input with arrow keys.

### highlightPastedText

Type: `boolean`\
Default: `false`

Highlight pasted text.

### onSubmit

Type: `(value: string) => void`

Function to call when `Enter` is pressed, where first argument is a value of the input.

### initialValue

Type: `string`\
Default: `""`

Initial value (only for uncontrolled component).

### value

Type: `string`

Value to display in a text input (for controlled component).

### onChange

Type: `(value: string) => void`

Function to call when value updates (for controlled component).

## License

MIT
