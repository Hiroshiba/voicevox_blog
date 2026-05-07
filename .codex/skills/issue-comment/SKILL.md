---
name: issue-comment
description: GitHub Issue にコメントを投稿する。
---

# Issue コメント投稿

引数のクォート事故を避けるため、コメント本文は一時ファイル経由で渡す。

## 処理フロー

1. `mkdir -p hiho_temp && mktemp -u hiho_temp/hiho.XXXXXXXXXX` で一時ファイルパスを取得する
2. コメント本文をそのパスに書く
3. `gh issue comment <num> --body-file <tempfile>` で投稿する
