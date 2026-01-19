[English](./README.md) | [日本語](./README.ja-JP.md)

# tinky-text-input

[Tinky](https://github.com/ByteLandTechnology/tinky) 的文本输入组件。

## 安装

```bash
npm install tinky-text-input
```

## 使用方法

```tsx
import React, { useState } from "react";
import { render, Text } from "tinky";
import { TextInput } from "tinky-text-input";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <Box>
      <Box marginRight={1}>
        <Text>请输入查询内容：</Text>
      </Box>

      <TextInput value={query} onChange={setQuery} />
    </Box>
  );
}

render(<Search />);
```

## 属性 (Props)

### placeholder

类型: `string`

当 `value` 为空时显示的文本。

### focus

类型: `boolean`\
默认值: `true`

监听用户输入。如果有多个输入组件同时存在，并且需要将输入“路由”到特定组件，此属性非常有用。

### mask

类型: `string`

替换所有字符并屏蔽值。适用于密码输入。

### showCursor

类型: `boolean`\
默认值: `true`

是否显示光标并允许使用方向键在文本输入框内导航。

### highlightPastedText

类型: `boolean`\
默认值: `false`

高亮显示粘贴的文本。

### onSubmit

类型: `(value: string) => void`

当按下 `Enter` 键时调用的函数，第一个参数是输入的值。

### initialValue

类型: `string`\
默认值: `""`

初始值（仅适用于非受控组件）。

### value

类型: `string`

文本输入框中显示的值（适用于受控组件）。

### onChange

类型: `(value: string) => void`

当值更新时调用的函数（适用于受控组件）。

## 许可证

MIT
