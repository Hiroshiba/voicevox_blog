---
description: GitHub Issue をクローズする。コメント追加も行う。
allowed-tools: Bash(gh issue close:*), Bash(gh issue comment:*)
---

# Issue クローズ

引数のクォート事故を避けるため、コメント本文は一時ファイル経由で渡す。

## 処理フロー

1. `mkdir -p hiho_temp && mktemp -u hiho_temp/hiho.XXXXXXXXXX` で一時ファイルパスを取得する
2. コメント本文をそのパスに書く
3. `gh issue comment <num> --body-file <tempfile>` でコメントを投稿する
4. `gh issue close <num>` でクローズする

コメント不要なら 1〜3 を省略して 4 のみ実行する。
