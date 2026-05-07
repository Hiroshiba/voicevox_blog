---
description: GitHub Issue を作成する。親 Issue が指定された場合はサブ Issue として紐付ける。
allowed-tools: Bash(gh issue create:*), Bash(gh api:*)
---

# Issue 作成

引数のクォート事故を避けるため、本文は一時ファイル経由で渡す。

## 処理フロー

1. `mkdir -p hiho_temp && mktemp -u hiho_temp/hiho.XXXXXXXXXX` で一時ファイルパスを取得する
2. 本文をそのパスに書く
3. `gh issue create -t "タイトル" -F <tempfile>` で Issue を作成する
4. 親 Issue が指定されている場合、`gh api --method POST /repos/{owner}/{repo}/issues/{親番号}/sub_issues -F sub_issue_id={作成したIssue番号}` で紐付ける
