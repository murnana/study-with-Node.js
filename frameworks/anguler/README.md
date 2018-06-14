# Anguler

- [Setup](#setup)
- [Generate Project](#generate-project)
    - [Generate Project Options](#generate-project-options)
- [Serve Application](#serve-application)
    - [Serve Application Options](#serve-application-options)
- [Generate Component](#generate-component)
    - [Generate Component Options](#generate-component-options)
- [Generate Service](#generate-service)
    - [Generate Service Options](#generate-service-options)
- [Generate Module](#generate-module)
    - [Generate Module Options](#generate-module-options)

## Setup

```shell
npm install -g @angular/cli
```
or
```shell
yarn global add @angular/cli
```



## Generate Project
```shell
ng new <name> [options]
```

### Generate Project Options
- `--collection (-c)`
    - Schematics collection to use.
- `--directory`
    - The directory name to create the workspace in.
- `--dryRun (-d)`
    - Run through without making any changes.
- `--force (-f)`
    - Forces overwriting of files.
- `--inline-style (-s)`
    - Specifies if the style will be in the ts file.
- `--inline-template (-t)`
    - Specifies if the template will be in the ts file.
- `--new-project-root`
    - The path where new projects will be created.
- `--prefix (-p)`
    - The prefix to apply to generated selectors.
- `--routing`
    - Generates a routing module.
- `--skip-git (-g)`
    - Skip initializing a git repository.
- `--skip-install`
    - Skip installing dependency packages.
- `--skip-tests (-S)`
    - Skip creating spec files.
- `--style`
    - The file extension to be used for style files.
- `--verbose (-v)`
    - Adds more details to output logging.
- `--view-encapsulation`
    - Specifies the view encapsulation strategy.


## Serve Application
```shell
# プロジェクトのディレクトリで行う
ng serve <project> [options]
```

### Serve Application Options
- `--aot`
    - Build using Ahead of Time compilation.
- `--base-href`
    - Base url for the application being built.
- `--browser-target`
    - Target to serve.
- `--common-chunk`
Use a separate bundle containing code used across multiple bundles.
- `--configuration (-c)`
    - Specify the configuration to use.
- `--deploy-url`
    - URL where files will be deployed.
- `--disable-host-check`
    - Don't verify connected clients are part of allowed hosts.
- `--eval-source-map`
    - Output in-file eval sourcemaps.
- `--hmr`
    - Enable hot module replacement.
- `--hmr-warning`
    - Show a warning when the- `--hmr option is enabled.`
- `--host`
    - Host to listen on.
- `--live-reload`
    - Whether to reload the page on change, using live-reload.
- `--open (-o)`
    - Opens the url in default browser.
- `--optimization`
    - Defines the optimization level of the build.
- `--poll`
    - Enable and define the file watching poll time period in milliseconds.
- `--port`
    - Port to listen on.
- `--prod`
    - Flag to set configuration to "prod".
- `--progress`
    - Log progress to the console while building.
- `--proxy-config`
    - Proxy configuration file.
- `--public-host`
    - Specify the URL that the browser client will use.
- `--serve-path`
    - The pathname where the app will be served.
- `--serve-path-default-warning`
    - Show a warning when deploy-url/base-href use unsupported serve path values.
- `--source-map`
    - Output sourcemaps.
- `--ssl`
    - Serve using HTTPS.
- `--ssl-cert`
    - SSL certificate to use for serving HTTPS.
- `--ssl-key`
    - SSL key to use for serving HTTPS.
- `--vendor-chunk`
    - Use a separate bundle containing only vendor libraries.
- `--watch`
    - Rebuild on change.

## Generate Component
```shell
ng generate component <name> [options]
```

コンポーネントは描画部分を司る(MVWでのViewに相当)
データの操作や保存はサービスが行う

### Generate Component Options
- `--change-detection (-c) [string]`
    - 変更を検出する方法を指定します
- `--dryRun (-d)`
    - 実際は何も変更せずに実行します
- `--export`
    - 宣言モジュールがコンポーネントをexportするのかを指定します
- `--flat ([boolean])`
    - 固有ディレクトリを生成する/しない
- `--force (-f)`
    - 強制的にファイルを上書きします
- `--inline-style (-s) [boolean]`
    - スタイル(css)を `.ts` ファイルに含めます
- `--inline-template (-t) [boolean]`
    - テンプレート(html)を `.ts`ファイルに含めます
- `--module (-m)`
    - モジュールを宣言します
    - app.modules.tsの declarations に入る？
    - でもデフォルトで入るような…？
- `--prefix (-p) ([string])`
    - セレクタ(Componentのselector)名を`app-[name]`ではなく`[name]`にします
- `--project`
    - The name of the project.
- `--selector`
    - The selector to use for the component.
- `--skip-import ([boolean])`
    - importをスキップします
- `--spec [boolean]`
    - Specifies if a spec file is generated.
- `--styleext`
    - The file extension to be used for style files.
- `--view-encapsulation (-v) [string]`
    - Specifies the view encapsulation strategy.


## Generate Service

```shell
ng generate service <name> [options]
```

サービスはデータの操作や保存を行う(MVWでのModelに相当)
変更した値はコンポーネントに注入したり、サービス同士でやりとりする

### Generate Service Options
- `--dryRun (-d)`
    - 実際は何も変更せずに実行します
- `--flat`
    - ディレクトリを生成しません
- `--force (-f)`
    - 強制的にファイルを上書きします
- `--project`
    - プロジェクト名
- `--spec`
    - specファイルを生成しません



## Generate Module
```shell
ng generate module <name> [options]
```

ルーティングができる(?)
コンポーネントをひとまとめにすることができる。



### Generate Module Options
- `--dryRun (-d)`
    - Run through without making any changes.
- `--flat`
    - 固有フォルダを生成しません
- `--force (-f)`
    - Forces overwriting of files.
- `--module(-m)=[string]`
    - AppModuleのimport配列に、生成したモジュールを登録します
- `--project`
    - The name of the project.
- `--routing`
    - Generates a routing module.
- `--routing-scope`
    - The scope for the generated routing.
- `--spec`
    - Specifies if a spec file is generated.
