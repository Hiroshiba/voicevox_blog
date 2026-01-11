# Bulma → Tailwind 移行計画（検討結果）

## 目的 / 非目的
- 目的: Bulma 依存を段階的に撤去し、Tailwind を基盤にしたスタイル・コンポーネント運用へ移行する。
- 非目的: この計画だけで UI を一括置換しない（実装は今後、この plan に沿って進める）。

## 現状の依存ポイント（この repo 固有）
- グローバル読み込み: `src/layouts/Base.astro` が `@use "@/styles/bulma.scss";` を `is:global` で読み込むため、全ページが Bulma 前提。
- Bulma Sass への直接依存: 複数ページの `<style lang="scss">` で `@use "bulma/sass/utilities/mixins"` 等を参照している（レスポンシブ mixin / 変数 / helper クラスへの `@extend`）。
- `@extend` 依存: `src/styles/helper.scss`（`.circle-icon` など）と `src/styles/markdown.scss`、および各ページの SCSS が Bulma のユーティリティクラスを `@extend` している。
- Bulma CSS 変数依存: `--bulma-*`（例: `src/components/PlayButton/PlayButton.tsx` の `--bulma-loading-color`、`src/components/Header/index.astro` の `--bulma-navbar-burger-color`）。
- Bulma コンポーネント構造依存: モーダルが Bulma の DOM 構造とクラス（`modal`, `modal-card-*`, `delete` など）を前提（例: `src/components/modal/*.tsx`, `src/components/modal/Modals.astro`）。
- Markdown 表示: `.markdown { @extend .content; ... }`（Bulma の `.content` 前提）で見た目を作っている（`src/styles/markdown.scss`）。

## 先に決めるべき設計（決めないと実装が散らかる）
### 1) ダークモードの駆動方式
- 現状: `src/layouts/Base.astro` が `data-theme={isDark ? "dark" : "light"}` を付与。
- Tailwind 側で `data-theme` を `dark` トリガーにするか、`class="dark"` 方式に寄せるかを決める（将来の CSS/JS の責務が変わる）。

ユーザー解答：tailwindのデファクトに合わせたいです

### 2) Tailwind の “ベーススタイル（preflight）” をどう扱うか
- Bulma も Tailwind も「素の HTML 要素」を前提にした設計があるため、併用期間に崩れが出やすい。
- 方針候補:
  - 併用期間は Tailwind preflight を無効化し、置換が進んだら有効化する
  - 最初から有効化して差分を Playwright スナップショットで管理しながら直す

ユーザー解答：もし可能なら最初から有効化したいですが、強い希望はないです

### 3) “コンポーネントでスタイルを持つ” か “ユーティリティ直書き” か
- この repo は Astro と React の混在が前提（README の運用方針もそれ）。
- 推奨: Tailwind のユーティリティを基盤にしつつ、再利用頻度が高いものは “プリミティブ” として React 側に寄せて集約する（Astro からは薄いラッパーで呼ぶ）。
  - 理由: 「React の中で Astro コンポーネントを使いづらい」制約を避けるため、スタイルと a11y を React 側で完結させやすい。

ユーザー解答：今AstroコンポーネントのものはAstroコンポーネントのまま残したいです。難しければ一旦ユーティリティ直書きで対応してください

## 主要な課題（移行時に詰まりやすい箇所）
### a11y（モーダル/ドロップダウン/ボタン）
- 現状のモーダルは `role="dialog"` までで、`aria-modal`、ラベル付け、フォーカストラップ、Esc 閉じ、背景スクロール抑止などが Bulma 任せ/未実装になりやすい。
- Tailwind にはコンポーネントがないため、置換のついでに “アクセシブルな Dialog/Dropdown” をどこで担保するかが最大の論点。
  - 方針候補: React 側で headless な Dialog 実装（既製の a11y 対応ライブラリ or 自前）に寄せる。

ユーザー解答：今AstroコンポーネントのものはAstroコンポーネントのまま残したいです

### Sass 依存（`@use` mixin / `@extend`）→ Tailwind 置換
- Bulma の `@include mobile/touch/...` と `@extend .mb-6` のような書き方は、そのまま Tailwind に移せない。
- 置換は「SCSS を残しつつ `@layer components` + `@apply` を使う」か「素直に class を書き換える」かの二択になりがちで、統一しないと保守不能になる。

ユーザー解答：大変だったとしてもtailwindのデファクトに合わせたいです

### “見た目の tokens” を Bulma から引き剥がす
- 今は Bulma の Sass 変数・CSS 変数が実質的な design tokens になっている。
- Tailwind の theme（colors, spacing, fontFamily, radius）に寄せる場合、既存の `$primary` 等との整合をどう取るかが必要。

### 併用期間の衝突（特に `button`, `title`, `container`, `section`）
- Bulma のクラス（`button`, `title`, `container`, `section`, `columns`…）は既に大量に使われているため、移行は “差し替え” ではなく “共存して徐々に消す” になる。
- 併用期間は「新規は Tailwind で書く」「既存 Bulma クラスを増やさない」をルール化しないと負債が増える。

ユーザー解答：これはとても課題だと思います、重点的に再考してください

## 実行フェーズ（この plan をそのまま TODO 化して進める）
### Phase 0: インベントリとガードレール
- Bulma 参照点を “削除対象リスト” として固定する（最低限: `src/layouts/Base.astro`, `src/styles/bulma.scss`, `src/styles/helper.scss`, `src/styles/markdown.scss`, `src/components/modal/*`, Bulma Sass を `@use` しているページ群）。
- 変更影響の大きいページを Playwright のスナップショット対象にする（Top / product / song / dormitory / nemo など）。
- Done: 「どのページ/コンポーネントが Bulma 依存か」「どこを直すと全体が崩れるか」が plan から追える状態。

### Phase 1: Tailwind 基盤の導入（Bulma は残す）
- Tailwind を Astro に導入し、`content` 対象に `.astro/.tsx/.ts/.mdx` を含める。
- `data-theme` に合わせた dark モード設定（上の設計 1 を反映）。
- “ベーススタイル（preflight）” 方針を確定し、併用期間の崩れを最小化する（設計 2）。
- Done: Tailwind を使ったクラスがビルド/SSR/クライアントで問題なく反映される。

### Phase 2: UI プリミティブを作って “置換単位” を作る
対象（例。ここを先に作ると移行が直線化する）:
- `Button` / `IconButton`（`circle-icon` 相当。`src/styles/helper.scss` の依存を消す受け皿）
- `Container` / `Section`（`container`, `section` の置換単位）
- `Heading`（`title`/サイズ系の置換単位）
- `Dialog`（モーダル置換の核。a11y をここで担保）
実装方針:
- React 側でプリミティブを持ち、Astro からは薄いラッパーで利用する（Astro→React は容易、逆は厳しいため）。
- Done: 新規 UI を Bulma クラス無しで組める（同等見た目は後回しでもよい）。

### Phase 3: インタラクティブ領域から Bulma を剥がす（a11y も同時に上げる）
優先対象:
- モーダル一式（`src/components/modal/*` と `src/components/modal/Modals.astro`）
- ドロップダウン/セレクタ（例: `src/components/StyleDropdown.tsx`, download modal 内 Selector）
- 再生ボタン（`src/components/PlayButton/PlayButton.tsx` の Bulma 依存とローディング表現）
ポイント:
- ここで Dialog を導入して focus/keyboard を “一箇所で” 解決する。
- Done: 「JS が絡む UI」から Bulma クラスが消え、a11y 要件がプリミティブで担保される。

### Phase 4: ページごとに Bulma を置換（Sass 依存を減らす）
方針:
- Bulma Sass mixin/変数（`@include mobile/touch`、`$size-*`）に依存しているページは、Tailwind のブレークポイント/spacing に寄せる。
- `@extend` を残さない（残すなら Tailwind 側の `@layer components` に寄せて “参照先が Tailwind” になるようにする）。
候補順（衝突の少ない順に）:
- Bulma `@use` が少ないページ → 多いページ（例: `src/pages/nemo/index.astro` は `@extend` が多く後回しになりがち）
- Done: `src/pages/**` から `bulma/sass/*` の `@use` が消えていく。

### Phase 5: Markdown 表示を Tailwind に寄せる
- `src/styles/markdown.scss` の `.content` 依存をやめ、Tailwind Typography 相当（もしくは自前スタイル）で見た目を作る。
- Done: Bulma を外しても Markdown の可読性が維持される。

### Phase 6: Bulma 撤去とクリーンアップ
- `src/layouts/Base.astro` の `@use "@/styles/bulma.scss";` を削除できる状態にする。
- `src/styles/bulma.scss` と Bulma npm 依存の削除、`astro.config.ts` の `quietDeps` の見直し。
- Done: `rg "bulma"` がゼロ（または意図的な履歴/文章のみ）になり、ビルド/テストが通る。

## 実装のルール（併用期間に守ること）
- 新規 UI は Bulma クラスを増やさない（“移行前提のプリミティブ” を使う）。
- Bulma 依存の SCSS 追記は禁止（`@extend`/`@use bulma/sass/*` を増やさない）。
- “見た目合わせ” より “置換単位の確立（Button/Dialog 等）” を優先する（ページを跨いで効くため）。

