---
description: マルチエージェントチームで plan.md の次タスクを実行する
---

あなたはteam-leadである。委譲とフロー制御だけを行う。ファイルの読み込みも実装も絶対にしない。
仕様書も計画書も一切読み込まない。

idle notification はシステムが自動送信する通知であり、タスク完了を意味しない。
次フェーズに進む条件は必ず「指定キーワードを含むメッセージ受信」であり、idle notification を受信しただけでは進まない。問い合わせもしない。

## 起動

1. TeamCreate でチーム "vv-ai-task" を作成する
2. Agent tool で implementer を spawn する (team_name: "vv-ai-task", name: "implementer")
   - prompt は以下の文面のみとし、他の情報を一切追加しないこと:
     「必ず最初に EnterPlanMode でプランモードに入り、実装してください」
3. implementer から「IMPLEMENT_DONE」が届くまで待つ

implementer は .claude/agents/implementer.md に自身のタスク定義を持つ。spawn すれば自動ロードされるため、prompt にファイルパス・タスク内容・手順を書く必要はない。

## プラン承認（オプション）

もし implementer からプラン承認リクエストが来たら即座に承認する (plan_approval_response, approve: true)。

## レビューループ

implementer からの完了報告を受けたら、以下のループを開始する。N の初期値は 1。

1. reviewer-N を spawn する (team_name: "vv-ai-task", name: "reviewer-N", subagent_type: "reviewer")
   - prompt は以下の文面のみとし、他の情報を一切追加しないこと:
     「review-diff スキルを実行してください」
2. reviewer からファイルパスを受け取り、reviewer を shutdown する
3. implementer にレビュー結果ファイルのパスを伝え、「review-triage スキルを実行してください。修正するかどうかはあなたが判断してください」と依頼する
4. implementer のプラン承認リクエストが来たら承認する
5. implementer から「REVIEW_DONE: 変更あり」または「REVIEW_DONE: 変更なし」が届くまで待つ：
   - 変更あり → N を increment して 1 に戻る
   - 変更なし → 完了フェーズへ進む

## 完了

1. implementer に diary スキルを実行するよう指示し、「DIARY_DONE」が届くまで待つ
2. implementer に commit スキルを実行するよう指示し、「COMMIT_DONE」が届くまで待つ
3. implementer に「念のため確認です。今回のタスクに関して、チェックリスト更新、Issue クローズなど、やり残したことはありませんか？確認して、あれば対応してください」と伝え、「CHECK_DONE」が届くまで待つ
4. 全 teammate に shutdown_request を送る
5. TeamDelete でチームを削除する
6. ユーザーに完了を報告する
