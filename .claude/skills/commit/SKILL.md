---
description: 変更をコミットする。実装完了後の git commit に使う。
allowed-tools: Bash(git add:*), Bash(git commit:*)
---

# コミット

引数のクォート事故を避けるため、コミットメッセージは一時ファイル経由で渡す。

## 処理フロー

1. `mkdir -p hiho_temp && mktemp -u hiho_temp/hiho.XXXXXXXXXX` で一時ファイルパスを取得する
2. コミットメッセージをそのパスに書く
3. `git add <paths>` で対象ファイルをステージングする
4. `git commit -F <tempfile>` でコミットする
