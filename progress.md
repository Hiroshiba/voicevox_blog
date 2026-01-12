# Bulma → Tailwind 移行進捗

## 2026-01-11
- Tailwind v4 を導入（`pnpm astro add tailwind --yes`）。`@tailwindcss/vite` が `astro.config.ts` に追加され、`src/styles/global.css` が生成された。
- `src/layouts/Base.astro` で `src/styles/global.css` を読み込み、`html` に `class="dark"`（条件付き）を付与して `dark:` 運用の入口を作成（`data-theme` は温存）。
- Tailwind の `dark` variant を class 駆動に変更（`src/styles/global.css` に `@custom-variant dark (&:where(.dark, .dark *));` を追加）。
- `pnpm build` が通ることを確認（既存の「Unsupported file type」警告は継続）。
- Bulma 依存の台帳を追加（`bulma-ledger.md`）。
- Playwright HTML レポート自動表示が非対話環境でハングし得るため、`playwright.config.mts` を修正して「CI または display 無しなら `open: "never"`」に倒す。
- スクショは `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` で完走することを確認。
- モーダル基盤を Tailwind 化しつつ a11y を担保する `Dialog`（React）を追加（`src/components/modal/Dialog.tsx`）：`aria-modal`、Esc 閉じ、フォーカストラップ、スクロール抑止、閉じた後のフォーカス復帰。
- 既存モーダル群を Bulma DOM/クラスから剥がして `Dialog` + Tailwind に移行（`src/components/modal/MarkdownModal.tsx`、`src/components/modal/NemoGuidanceModal.tsx`、`src/components/modal/download/DownloadModal.tsx`、`src/components/modal/download/DownloadNemoModal.tsx`、`src/components/modal/download/Selector.tsx`）。
- `src/components/modal/Modals.astro` の Bulma SCSS 依存（`@use bulma/sass/*` / `@extend` / `--bulma-*`）を撤去（Markdown の global style import は温存）。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを確認（port 4321 が残っている場合は停止してから実行）。

### 次にやる（plan2 Phase 1/0）
- Bulma 依存の“削除対象台帳”を `rg "bulma/sass|--bulma-|@extend \\.|has-background-|is-" src` 等で固定し、置換単位（ページ/断面）を切る。
- preflight で崩れるページ/種類を分類（特に markdown / header / 共通レイアウト）。

## 2026-01-12
- Markdown の Bulma 依存（`src/styles/markdown.scss`）を Tailwind 側へ寄せる検討を実施したが、VRT（`tests/e2e/screenshot/index.spec.ts`）の差分が大きく、既存スナップショット維持を優先して一旦保留。
- 既存の見た目（Bulma `.content` + `.title`/spacing 相当）を維持するため、`src/styles/markdown.scss` を復元し、`src/components/Markdown.astro` / `src/components/modal/Modals.astro` の読み込みを復帰。
- `src/pages/qa/_layout.astro` の `@extend`（Bulma helper）も VRT 互換のため復帰。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを確認。
- Bulma CSS 変数への直接依存を減らすため、`src/styles/global.css` に `--vv-*`（アプリ側トークン）を追加し、Bulma→アプリ変数のブリッジを集約（`--bulma-*` を “ここだけ” に寄せる）。
- `src/components/PlayButton/PlayButton.tsx` の `--bulma-loading-color` 直接設定を撤去し、`--vv-loading-color` + `.vv-bulma-loading-bridge` に置換。
- `src/pages/song/index.astro` の `--bulma-link-text` 参照を `--vv-link-text` 参照へ置換。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを再確認。
- 以後 `--bulma-*` を増やさないため、CI の `lint` job にガードを追加（`.github/workflows/test.yml`）。
- `src/styles/helper.scss` の Bulma Sass（`@use "bulma/sass/*"`）と Bulma への `@extend` を撤去し、`.button.circle-icon` 相当のスタイルを自前定義へ置換（VRT 維持）。
- `bulma-ledger.md` の `helper.scss` を Bulma Sass/@extend 台帳から除外。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを確認。
- Header の `--bulma-navbar-burger-color` 直接指定を撤去し、`src/styles/global.css` の `.vv-bulma-navbar-burger-color-bridge` 経由に移行（`src/components/Header/index.astro`, `src/components/Header/Header.tsx`）。
- `--bulma-*` の増加を防ぐ CI ガードの許可リストを更新（`.github/workflows/test.yml`）。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを確認。
- `src/pages/qa/_layout.astro` の Bulma Sass helper 依存（`@use "bulma/sass/helpers"` + `@extend .p-*`）を撤去し、同等の padding を直書き（VRT 維持）。
- `bulma-ledger.md` から `src/pages/qa/_layout.astro` の Bulma Sass 依存を除外。
- `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` が `20 passed` することを確認。
- `src/pages/talk/_CharacterCard.astro` の Bulma Sass helper 依存（`@use "bulma/sass/helpers"` + `@extend .py-1`）を撤去し、同等の padding を直書き（VRT 維持）。
- `bulma-ledger.md` から `src/pages/talk/_CharacterCard.astro` の Bulma Sass 依存を除外。
- `src/pages/dormitory/call_names/_Cell.astro` の Bulma Sass 依存（`@use "bulma/sass/*"` + `@extend .m-1` + `$radius`）を撤去し、`margin`/`border-radius` を直書き（`border-radius` は `--vv-radius` を参照）。
- `src/styles/global.css` に `--vv-radius`（Bulma→アプリ token ブリッジ）を追加。
- `bulma-ledger.md` から `src/pages/dormitory/call_names/_Cell.astro` の Bulma Sass 依存を除外。
- `src/pages/dormitory/call_names/index.astro` の Bulma Sass 依存（`@use "bulma/sass/*"` + `@extend .p-*` + `@include mobile` + `$navbar-height`）を撤去し、padding と media query を直書き（`height` は `--vv-navbar-height` を参照）。
- `src/styles/global.css` に `--vv-navbar-height`（Bulma→アプリ token ブリッジ）を追加。
- `bulma-ledger.md` から `src/pages/dormitory/call_names/index.astro` の Bulma Sass 依存を除外。
