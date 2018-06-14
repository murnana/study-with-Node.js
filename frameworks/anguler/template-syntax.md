# Template Syntax

コンポーネント内で使用可能なシンタックス。
for分、if文など

- [Template Syntax](#template-syntax)
    - [NgForOf](#ngforofhttps---angularjp-guide-template-syntaxngfor)


## [NgForOf](https://angular.jp/guide/template-syntax#ngFor)
for文。

```html
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
```
と書くと、
```html
<li _ngcontent-c1="">
  <span _ngcontent-c1="" class="badge">12</span> Narco
</li>
```
となる