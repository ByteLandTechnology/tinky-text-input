[English](./README.md) | [简体中文](./README.zh-CN.md)

# tinky-text-input

[Tinky](https://github.com/ByteLandTechnology/tinky) 用のテキスト入力コンポーネント。

## インストール

```bash
npm install tinky-text-input
```

## 使い方

```tsx
import React, { useState } from "react";
import { render, Text } from "tinky";
import { TextInput } from "tinky-text-input";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <Box>
      <Box marginRight={1}>
        <Text>検索クエリを入力:</Text>
      </Box>

      <TextInput value={query} onChange={setQuery} />
    </Box>
  );
}

render(<Search />);
```

## プロップス (Props)

### placeholder

型: `string`

`value` が空のときに表示するテキスト。

### focus

型: `boolean`\
デフォルト: `true`

ユーザーの入力をリッスンします。複数の入力コンポーネントが同時に存在し、入力を特定のコンポーネントに「ルーティング」する必要がある場合に便利です。

### mask

型: `string`

すべての文字を置換して値をマスクします。パスワード入力に便利です。

### showCursor

型: `boolean`\
デフォルト: `true`

カーソルを表示し、矢印キーでテキスト入力内を移動できるようにするかどうか。

### highlightPastedText

型: `boolean`\
デフォルト: `false`

貼り付けられたテキストをハイライトします。

### onSubmit

型: `(value: string) => void`

`Enter` キーが押されたときに呼び出される関数。最初の引数は入力値です。

### initialValue

型: `string`\
デフォルト: `""`

初期値（非制御コンポーネントのみ）。

### value

型: `string`

テキスト入力に表示する値（制御コンポーネントのみ）。

### onChange

型: `(value: string) => void`

値が更新されたときに呼び出される関数（制御コンポーネントのみ）。

## ライセンス

MIT
