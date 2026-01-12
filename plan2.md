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
- 移行期間の互換: 既存 `data-theme="dark"` をすぐ捨てない（段階移行のため）。
- `data-theme` を捨てるタイミング（本 plan の責任範囲で固定）:
  - 入口: `src/layouts/Base.astro` に `class={isDark ? "dark" : ""}` を付与する。Tailwind v4 は CSS-first なので `src/styles/global.css` 側で `dark` variant を class 駆動にする（`@custom-variant`）。
  - 併用: `data-theme` は残すが、“新規の分岐”は `dark:` に統一する（`data-theme` を参照する CSS/JS を増やさない）。
  - 出口（削除条件）: `rg -n "data-theme" src` が `Base.astro` 以外で 0 になり、かつ主要ページの VRT が成立した時点で `data-theme` を削除する。

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
- 既存の Astro コンポーネント起点のものは Astro のまま残す（React 化しない）。
- 既存の React モーダル群は React のまま a11y 対応を入れる。
- 共通化は「必要になった範囲で」行い、まずは各モーダルの a11y 要件（5.1）を満たすことを優先する。

## 6. 実行フェーズ（この plan を今後の PR 単位に落とす）
### Phase 0: 現状固定（“やる/やらない”の境界を作る）
- Bulma 依存点のリストを “削除対象台帳” として固定する（`bulma.scss`/`helper.scss`/`markdown.scss`/`Base.astro`/`modal/*`/`bulma/sass` を `@use` しているページ群）。
- Playwright のスナップショット対象ページを決める（崩れ検知の基準面）。
- Playwright のスクショ実行は「レポートを自動で開かない」ことを必須ルールにする（非対話環境でハングするため）。
  - 実行コマンドは `CI=1 pnpm test:e2e`（`playwright.config.mts` が `open: "never"` になる）に統一する。
  - レポート表示は別コマンドで明示的に行う（`pnpm playwright show-report` を手動実行）。

## 6.5 VRT（スクショ）を壊さず進める運用
この repo では VRT のスナップショットを「現状の見た目仕様」として扱い、移行作業は“差分ゼロ”を基本とする。

### 6.5.1 ルール（VRT を仕様として固定）
- 通常の移行 PR ではスナップショット更新をしない（= 差分は実装修正で潰す）。
- `--update-snapshots` は“自動で”実行しない。ユーザー（レビュー側）が「この作業はスナップショット更新してよい」と明示した場合のみ実行する。
- 例外的にスナップショット更新が必要な作業（例: Markdown を Bulma `.content` から完全に外す）は「スナップショット更新専用 PR」に隔離し、更新理由・影響ページ・レビュー観点・更新する画像の一覧を本文に固定する。
- 1 PR の変更範囲は「1 断面（または 1 ページ）」に閉じる（差分画像の読解コストを爆発させないため）。

### 6.5.2 進め方（差分を出さないための手筋）
- “危険断面”は最後まで Bulma を残す: Markdown / Header / 共通レイアウトは、VRT の差分が巨大になりやすいので「撤去の終盤まで温存」し、先にモーダル等の独立領域から進める。
- “Bulma token” を先に引き剥がす: `--bulma-*` を参照している箇所は、見た目を固定したまま `--app-*` 等へ移植し、Bulma 本体の撤去に備える（VRT 上の差分を生みやすいのは token の断絶）。
- Tailwind への置換は「Bulma と同じ見た目を再現する CSS を Tailwind 側に置く」順に寄せる:
  - 例: Bulma の `.content` に相当する見た目を Tailwind 側で実装できてから Markdown の Bulma 依存を外す（先に外すと差分が膨らむ）。
  - 例: `button` / `navbar` などの semantic class を消す前に、同等の padding/typography を Tailwind 側で“同値”に寄せる。

### 6.5.3 preflight の扱い（VRT で崩れるなら切り替え順を変える）
- preflight 有効化で差分が広範囲に出る場合は、(a) preflight を一時的に無効化する、または (b) Bulma の前提に合わせる “補正 CSS” を `src/styles/global.css` に追加して差分を潰す。
- “補正 CSS” は出口条件付きで入れる（例: `rg "bulma" src/styles` が 0 になったら削除）。

### 6.5.4 テスト側での揺れ対策（必要最小限）
- どうしても差分が安定しない箇所だけ、Playwright でマスク/無効化する（例: `<video>` controls のように）。増やす場合は「なぜ UI 側で潰せないか」をセットで残す。

### 6.5.5 VRT が“不安定”になったときの手順（スナップショット更新で誤魔化さない）
- まず “仕様変更の差分” か “揺れ” かを判定する（同一コミットで複数回実行して差分が変動するなら揺れ）。
- 揺れの場合の優先順は次で固定する:
  1) 読み込み待ちの不足（画像/フォント/音声/遅延レンダ）を疑い、待機条件を強化する
  2) アニメーション/transition/`filter`/blur 等の環境差が出やすい表現を “テスト環境だけ” 無効化する（本番デザインは維持）
  3) それでも無理な要素のみ Playwright のマスク対象に入れる
- 上記で安定化できない場合に限り、「スナップショット更新の是非」をユーザーに確認してから進める（確認なしに `--update-snapshots` へ逃げない）。

### Phase 1: Tailwind 導入の方式を決め切る（ここが曖昧だと後が全て死ぬ）
- Tailwind は `pnpm astro add tailwind` で導入する（Astro 標準の導入経路に寄せる）。
- `dark` 駆動（class）への寄せ方を確定し、`data-theme` の削除条件（2.1）に従って段階移行する。
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
