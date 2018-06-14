# React Tutorial for TypeScript

tutorialのTypeScript版。 [ここを参考に](https://qiita.com/m0a/items/d723259cdeebe382b5f6)。
詳細は省いて、差異だけメモ。


## コンポーネントとProps
静的型付け言語ゆえに、型を宣言しないとエラーを吐く。
ReactのComponentでは、ジェネリックとしてPropsの型を渡して解決させる。

```tsx
import * as React from 'react';

interface SquareProps {
    value: number;
}

export class Square extends React.Component<SquareProps> {
  public render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```



## this行方不明問題

`onClick`で呼ぶ関数を指定する際、`onClick={this.onClick}`と入れてしまうと、thisが行方不明の状態でコールされてしまう。
そのため、`onClick() => {this.onClick()}`と書くのが理想。
しかしtslintに阻まれる(Lambdas are forbidden in JSX attributes due to their rendering performance impact)ため、ラムダをJSXの外で宣言して使用する



## エラーメモ
たぶんtslint.jsonのせいなのが大半。
一体何のルールが引っ掛かったのかは不明。



### The class method 'render' must be marked either 'private', 'public', or 'protected'
このメソッドは`private`なのか`public`なのか`protected`なのか明示しろと言ってくる。



### A maximum of 1 class per file is allowed.
1ファイル1クラス。



### Import sources within a group must be alphabetized.
`import`の順番がアルファベット順じゃないと怒る。



## interface name must start with a capitalized I
インターフェース名は`I`で始まらなければならない



## Lambdas are forbidden in JSX attributes due to their rendering performance impact
Lambdaは、レンダリングのパフォーマンスに影響するため、JSX属性では禁止されています