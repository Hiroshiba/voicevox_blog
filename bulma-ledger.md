# Bulma 依存 “削除対象台帳”

移行作業はこの台帳を減らす形で進める（新規で増やさない）。

## 1) グローバル読み込み
- `src/layouts/Base.astro`（`import "@/styles/bulma-legacy.css"`）

## 2) SCSS の `@use "bulma/sass/*"`（mixin / 変数 / helpers）
（撤去済み）

## 3) `@extend`（Bulma クラス依存）
（撤去済み）

## 4) `--bulma-*`（CSS 変数依存）
- `src/styles/global.css`（Bulma→アプリ変数のブリッジ。Bulma 撤去時に実値へ置換）
- `src/styles/helper.scss`（`.button.circle-icon` の見た目維持に Bulma の button vars を参照）

## 5) Bulma クラス（`is-*` / `has-*` など）依存（広範囲）
- `src/layouts/*`, `src/components/*`, `src/pages/*` に点在（特に `Header`, `PlayButton`, `talk`, `dormitory`, `nemo`）。
- 置換は “ページ/断面単位” で行い、混在は plan2 のルールに従う。

## 6) Bulma 互換 CSS（依存を外すための vendoring）
- `src/styles/bulma-legacy.css`（Bulma v1 系を Sass でビルドした出力を固定。npm の `bulma` 依存は撤去）
