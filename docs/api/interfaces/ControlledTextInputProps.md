[**tinky-text-input**](../README.md)

---

[tinky-text-input](../globals.md) / ControlledTextInputProps

# Interface: ControlledTextInputProps

Props for the [ControlledTextInput](../functions/ControlledTextInput.md) component.

## Extends

- [`TextInputProps`](TextInputProps.md)

## Properties

### focus?

> `readonly` `optional` **focus**: `boolean`

Listen to user's input. Useful in case there are multiple input components
at the same time and input must be "routed" to a specific component.

#### Default

```ts
true;
```

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`focus`](TextInputProps.md#focus)

---

### highlightPastedText?

> `readonly` `optional` **highlightPastedText**: `boolean`

Highlight pasted text.

#### Default

```ts
false;
```

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`highlightPastedText`](TextInputProps.md#highlightpastedtext)

---

### initialValue?

> `readonly` `optional` **initialValue**: `string`

Initial value.

#### Default

```ts
"";
```

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`initialValue`](TextInputProps.md#initialvalue)

---

### mask?

> `readonly` `optional` **mask**: `string`

Replace all chars and mask the value. Useful for password inputs.

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`mask`](TextInputProps.md#mask)

---

### onChange()

> `readonly` **onChange**: (`value`) => `void`

Function to call when value updates.

#### Parameters

##### value

`string`

#### Returns

`void`

---

### onSubmit()?

> `readonly` `optional` **onSubmit**: (`value`) => `void`

Function to call when `Enter` is pressed, where first argument is a value of the input.

#### Parameters

##### value

`string`

#### Returns

`void`

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`onSubmit`](TextInputProps.md#onsubmit)

---

### placeholder?

> `readonly` `optional` **placeholder**: `string`

Text to display when `value` is empty.

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`placeholder`](TextInputProps.md#placeholder)

---

### showCursor?

> `readonly` `optional` **showCursor**: `boolean`

Whether to show cursor and allow navigation inside text input with arrow keys.

#### Default

```ts
true;
```

#### Inherited from

[`TextInputProps`](TextInputProps.md).[`showCursor`](TextInputProps.md#showcursor)

---

### value

> `readonly` **value**: `string`

Value to display in a text input.
