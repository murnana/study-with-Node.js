# RxJS -  Reactive Extensions for JavaScript

RxJS = Observables + Operators + Schedulers
JavaScript版Rx。


## そもそも「リアクティブプログラミング」ってなんぞ

だいたい3つくらい単語が出てくる。

### Reactive Programming;RP
プログラムの分類の一つ Reactive program を実装するための考え方

- 堅苦しく表現すると、**Reactive program の プログラミングパラダイム**
- ほかには Transformational program, Interactive program があるとか

| 分類                     | 概要                                    | 例                        |
|:-------------------------|:---------------------------------------|:--------------------------|
| Transformational program | 実行開始前に決まった入力から結果を出力する | キャラクター詳細表示        |
| Interactive program      | 特定の間隔で決まった入力から結果を出力する | キャラクターの待機モーション |
| Reactive program         | **入力が発生した際に**結果を出力する      | 攻撃ボタンでキャラクターが攻撃アクションをする |

- 入力に対して、**非同期的**に処理をして、出力するのが特徴
    - つまり60fps毎にコントローラの入力を引っ張り出すのは Interactive program



### Functional Reactive Programming;FRP

**関数型**リアクティブプログラミング

- リアクティブプログラミングの派生
- 関数型プログラミングで書く <spam style="font-size: 80%">らしいが、いまいちよくわからない</spam> 
    - LINQ, Arrayのmap,filterのように、関数を数珠つなぎにして処理を表現する



### Reactive Extentions;Rx

> Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.
イベントに対してLINQのような書き方ができる。
イベントは非同期的に処理される。


- MicrosoftがC#向けライブラリとして「Rx」を開発したのが発端
- __observable sequences and LINQ-style query operators__ とか書いてあるけれど **RxはFRPの一種ではない**
    - そこまでシンプルには書けない…




## 参考
- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [RxJS を学ぼう #1 &#8211; これからはじめる人のための導入編 &#8211; PSYENCE:MEDIA](https://tech.recruit-mp.co.jp/front-end/rxjs-intro/)
- [リアクティブプログラミングとは何だったのか](https://qiita.com/hiruberuto/items/39e4126f470d8b84b291) - Qiita
- [【翻訳】あなたが求めていたリアクティブプログラミング入門 - ninjinkun&#39;s diary](https://ninjinkun.hatenablog.com/entry/introrxja)
- [Reactive Programming を理解するための基礎知識 | ギャップロ](https://www.gaprot.jp/pickup/tips/reactive-programming)
