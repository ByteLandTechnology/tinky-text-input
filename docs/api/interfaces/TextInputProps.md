[**tinky-text-input**](../README.md)

---

[tinky-text-input](../globals.md) / TextInputProps

# Interface: TextInputProps

Props for the [TextInput](../functions/TextInput.md) component.

## Extended by

- [`ControlledTextInputProps`](ControlledTextInputProps.md)

## Properties

### focus?

> `readonly` `optional` **focus**: `boolean`

Listen to user's input. Useful in case there are multiple input components
at the same time and input must be "routed" to a specific component.

#### Default

```ts
true;
```

---

### highlightPastedText?

> `readonly` `optional` **highlightPastedText**: `boolean`

Highlight pasted text.

#### Default

```ts
false;
```

---

### initialValue?

> `readonly` `optional` **initialValue**: `string`

Initial value.

#### Default

```ts
"";
```

---

### mask?

> `readonly` `optional` **mask**: `string`

Replace all chars and mask the value. Useful for password inputs.

---

### onSubmit()?

> `readonly` `optional` **onSubmit**: (`value`) => `void`

Function to call when `Enter` is pressed, where first argument is a value of the input.

#### Parameters

##### value

`string`

#### Returns

`void`

---

### placeholder?

> `readonly` `optional` **placeholder**: `string`

Text to display when `value` is empty.

---

### showCursor?

> `readonly` `optional` **showCursor**: `boolean`

Whether to show cursor and allow navigation inside text input with arrow keys.

#### Default

```ts
true;
```
