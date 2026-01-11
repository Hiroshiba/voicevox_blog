# Bulma → Tailwind 移行計画（plan2 / ユーザー回答反映版）

## 0. この plan の位置づけ
- これは「実装 TODO」ではなく、今後の実装を迷走させないための“意思決定・切り分け・順序”の指示書。
- 目的は Bulma を段階的に撤去して Tailwind に移行すること。UI を一括で作り直すことは目的にしない。

## 1. 前提（この repo 固有の制約）
- `src/layouts/Base.astro` が `@use "@/styles/bulma.scss"` を `is:global` で読み込んでおり、現状は全ページが Bulma 前提。
- Bulma 依存は「class 名」だけでなく、SCSS の `@use bulma/sass/*` と `@extend`、および `--bulma-*` CSS 変数に分散している。
- Astro + React 混在。かつ「Astro 内で React hook を使えない」前提のため、横断状態は Nanostores に寄っている（README 方針）。
- モーダルは `src/components/modal/*`（React）と `src/components/modal/Modals.astro`（Astro + `<script>`）の混在で、a11y が Bulma 任せになりやすい。

## 2. 先に“確定”しておくこと（ユーザー回答を plan に固定する）
### 2.1 ダークモード
- 方針: Tailwind のデファクトに合わせて `class="dark"` 駆動に寄せる。
- 移行期間の互換: 既存 `data-theme="dark"` をすぐ捨てない（段階移行のため）。Tailwind 側は一時的に両方を拾える設定/運用にする想定。

### 2.2 preflight（Tailwind の base）
- 方針: 可能なら最初から有効化して進める（ただし強い希望ではない）。
- 以後の判断軸: 「併用で崩れる範囲が局所対応で収まるか」「修正量がモーダル/Markdown/主要ページに閉じるか」で継続可否を決める。

### 2.3 コンポーネントの持ち方（Astro/React）
- 方針: 既存の Astro コンポーネントは基本的に Astro のまま残す。
- 例外: a11y やフォーカス管理など“UI の挙動”が絡み、Astro `<script>` が肥大化する場合のみ React 化を許容。
- 置換の初期は「ユーティリティ直書き」で良い（抽象化は、重複が見えてから最小限にやる）。

## 3. 最大の論点：Bulma と Tailwind の“併用期間”をどう破綻させないか
ここを曖昧にすると、移行が無限に長引きます。以後の PR は下のルールに従う。

### 3.1 併用期間のルール（破綻防止の最低限）
- 新規実装では Bulma クラス/`@use bulma/sass/*`/`@extend` を増やさない（既存の追記も同様に禁止）。
- 1 コンポーネント（または 1 ページ断面）内で「Bulma と Tailwind を混ぜて解決しない」：その断面はどちらかに寄せる。
  - 例外は“段階移行の橋渡し”に限定し、plan 内で橋渡しの出口（削除条件）を明記する。
- 「置換単位」を小さく切る：`Button` 全部置換などの横断作業は避け、ページ or コンポーネント単位で完結させる。

### 3.2 衝突の実体（重点再考）
- Tailwind は Bulma と class 名がぶつかるというより、preflight による「素の要素の初期値」が変わって Bulma 前提の見た目が揺れるのが本質。
- Bulma 前提の “semantic class” が大量にある（`section/container/title/button/navbar/modal` 等）ため、併用中に「既存 Bulma を放置しつつ Tailwind で足す」運用は見た目・保守の両方で破綻しやすい。
- したがって、移行は「Bulma を残したまま Tailwind を導入」ではなく「Tailwind を導入した上で、断面ごとに Bulma 前提を“剥がす”」として計画する。

## 4. Bulma 依存の種類ごとの“置換戦略”を先に決める
実装フェーズでは迷わないよう、下記のそれぞれで“採用する変換パターン”を 1 つに固定する（混ぜると地獄）。

### 4.1 SCSS の `@use bulma/sass/*`（mixin/変数）
- 対象: `@include tablet` 等のレスポンシブ mixin、`$size-*` 等の変数参照。
- 変換パターン: 「Tailwind のブレークポイント/spacing へ置換」か「CSS を素直に書く（必要最小限）」のどちらかに統一する。

### 4.2 `@extend`（Bulma クラス依存）
- 対象: `src/styles/helper.scss`（例: `.circle-icon`）、`src/styles/markdown.scss`（`.content` / `.title` 等）と各ページの `<style lang="scss">`。
- 変換パターン: “最初は class を書き換える”に寄せる（`@apply` は必要性が出た箇所だけ）。

### 4.3 `--bulma-*`（CSS 変数）
- 対象: `src/components/PlayButton/PlayButton.tsx`、`src/components/Header/index.astro`、`src/components/modal/Modals.astro` など。
- 変換パターン: Tailwind theme に寄せる（`primary/text` など）か、必要なら `--app-*` の自前トークンへ移植して Bulma と切り離す。

### 4.4 Bulma の DOM 構造前提（特に modal）
- 対象: `modal-card-*` 等の構造、閉じるボタン（`delete`）など。
- 変換パターン: 見た目の再現より「a11y を満たす構造」に寄せ、見た目は後で寄せる（再現が必要なら Tailwind 側で行う）。

## 5. a11y を“移行のついで”で落とさないための要件固定
Tailwind は headless なので、a11y は計画上の成果物として固定する。

### 5.1 Dialog（モーダル）の最低要件（これを満たせないなら Bulma から先に剥がさない）
- `role="dialog"`（またはネイティブ `dialog`） + `aria-modal="true"` 相当
- タイトル/説明のラベル付け（`aria-labelledby` / `aria-describedby`）
- フォーカストラップ、Esc 閉じ、背景スクロール抑止、閉じた後のフォーカス復帰
- キーボード操作で破綻しない（Tab/Shift+Tab）

### 5.2 実装形態の決め方（Astro を残す前提での判断）
- 既存の React モーダル群は React のまま a11y 対応を入れるのが最短。
- Astro 側に残るものは「共通の dialog 基盤（振る舞い）」をどこで持つかを決める：
  - (A) React の dialog 基盤を Astro から `client:*` で呼ぶ
  - (B) Astro `<script>` + 共通 TS（Nanostores と相性が良い）で持つ
- plan 上は、(A)(B) を比較して「どのモーダルをどちらで持つか」を先に分類してから着手する。

## 6. 実行フェーズ（この plan を今後の PR 単位に落とす）
### Phase 0: 現状固定（“やる/やらない”の境界を作る）
- Bulma 依存点のリストを “削除対象台帳” として固定する（`bulma.scss`/`helper.scss`/`markdown.scss`/`Base.astro`/`modal/*`/`bulma/sass` を `@use` しているページ群）。
- Playwright のスナップショット対象ページを決める（崩れ検知の基準面）。

### Phase 1: Tailwind 導入の方式を決め切る（ここが曖昧だと後が全て死ぬ）
- `dark` 駆動（class）への寄せ方を確定し、移行期間の互換の出口条件を定義する。
- preflight を有効化した状態での崩れを「どのページで」「どの種類の崩れが」起きるか分類し、局所対応で収まるか判断する。

### Phase 2: 置換の“最小単位”を確定（ページ/コンポーネント単位で進める）
- 先に「Bulma を剥がすと事故る断面」を特定する（モーダル、Markdown、ヘッダー/ナビ、共通レイアウト）。
- それ以外のページは、ユーティリティ直書きで Bulma を減らす（抽象化は後回し）。

### Phase 3: モーダル（a11y）を先に片付ける
- Dialog の要件（5.1）を満たす“基盤”を先に決め、既存モーダルを順に載せ替える。
- `src/components/modal/Modals.astro` の Bulma 依存（SCSS と `--bulma-*`）を剥がせる見通しを立てる。

### Phase 4: Markdown 表示を Bulma `.content` 依存から外す
- `.markdown { @extend .content; ... }` を脱しても読める見た目を用意する（Tailwind 側に寄せる）。

### Phase 5: Bulma 撤去
- グローバル Bulma 読み込みを外しても主要ページのスナップショットが成立する状態にする。
- npm の `bulma` 依存と `src/styles/bulma.scss` を撤去できる条件を満たしたら削除する。

## 7. “計画として書くべきもの”チェックリスト（今後 plan を更新するときの指示）
- 仕様決め（2, 4, 5）の“結論”と“採用しない案”を短く残す（後で蒸し返さないため）。
- 併用期間のルール（3.1）を破る例外を作る場合は、必ず「いつ消すか（出口条件）」を書く。
- 各フェーズに「Done（終了条件）」を書く（例: `rg "bulma/sass" src` が 0、などの客観条件）。
- 「最初に手を付ける対象」と「最後まで Bulma を残してよい対象」を明記する（作業の順序を固定する）。

