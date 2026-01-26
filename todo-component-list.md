## UIコンポーネント（簡単順）

- [x] **PlayButton** `src/components/PlayButton/` → `dev/ui/play-button/` 音声再生ボタン
- [x] **StyleDropdown** `src/components/StyleDropdown.tsx` → `dev/ui/style-dropdown/` スタイル選択
- [x] **Footer** `src/components/Footer.astro` → `dev/ui/footer/` サイトフッター
- [x] **Header** `src/components/Header/` → `dev/ui/header/` ナビゲーションバー

### ページセクション系

- [x] **SoftwareFeature** `src/pages/_SoftwareFeature.astro` → `dev/ui/software-feature/`
- [x] **EngineGuidanceSection** `src/pages/_EngineGuidanceSection.astro` → `dev/ui/engine-guidance/`
- [ ] **OssGuidanceSection** `src/pages/_OssGuidanceSection.astro` → `dev/ui/oss-guidance/`
- [ ] **LinkListSection** `src/pages/_LinkListSection.astro` → `dev/ui/link-list/`
- [ ] **CharacterCard (talk)** `src/pages/talk/_CharacterCard.astro` → `dev/ui/character-card-talk/`
- [ ] **CharacterCard (dormitory)** `src/pages/dormitory/_CharacterCard.astro` → `dev/ui/character-card-dormitory/`
- [ ] **TopIllustContainer** `src/pages/dormitory/_TopIllustContainer.astro` → `dev/ui/top-illust/`
- [ ] **ExplainSection** `src/pages/dormitory/_ExplainSection.astro` → `dev/ui/explain-section/`

---

## 参考情報

### Bulma依存クラス一覧

| コンポーネント | Bulmaクラス                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| PlayButton     | `button`, `is-primary`, `is-loading`, `circle-icon`                                                                 |
| StyleDropdown  | `dropdown`, `dropdown-trigger`, `dropdown-menu`, `dropdown-content`, `dropdown-item`, `button`, `is-rounded`        |
| Footer         | `button`, `is-small`, `is-dark`, `container`, `is-flex`, `is-justify-content-center`                                |
| Header         | `navbar`, `navbar-brand`, `navbar-item`, `navbar-menu`, `navbar-burger`, `navbar-end`, `is-fixed-top`, `has-shadow` |

### 複雑さの目安

| レベル | コンポーネント                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------- |
| 低     | Footer, SoftwareFeature, EngineGuidanceSection, OssGuidanceSection, LinkListSection, CharacterCard |
| 中     | PlayButton, StyleDropdown, TopIllustContainer, ExplainSection                                      |
| 高     | Header（レスポンシブ、Intersection Observer、状態管理）                                            |
