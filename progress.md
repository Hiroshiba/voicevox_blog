# Bulma → Tailwind 移行進捗

## 2026-01-11
- Tailwind v4 を導入（`pnpm astro add tailwind --yes`）。`@tailwindcss/vite` が `astro.config.ts` に追加され、`src/styles/global.css` が生成された。
- `src/layouts/Base.astro` で `src/styles/global.css` を読み込み、`html` に `class="dark"`（条件付き）を付与して `dark:` 運用の入口を作成（`data-theme` は温存）。
- Tailwind の `dark` variant を class 駆動に変更（`src/styles/global.css` に `@custom-variant dark (&:where(.dark, .dark *));` を追加）。
- `pnpm build` が通ることを確認（既存の「Unsupported file type」警告は継続）。
- Bulma 依存の台帳を追加（`bulma-ledger.md`）。
- Playwright HTML レポート自動表示が非対話環境でハングし得るため、`playwright.config.mts` を修正して「CI または display 無しなら `open: "never"`」に倒す。
- スクショは `CI=1 pnpm test:e2e tests/e2e/screenshot/index.spec.ts` で完走することを確認。

### 次にやる（plan2 Phase 1/0）
- Bulma 依存の“削除対象台帳”を `rg "bulma/sass|--bulma-|@extend \\.|has-background-|is-" src` 等で固定し、置換単位（ページ/断面）を切る。
- preflight で崩れるページ/種類を分類（特に modal / markdown / header）。
