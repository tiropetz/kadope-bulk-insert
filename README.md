# 概要
Kadopeで一括打刻するためのスクリプト。  
ある月曜日から金曜日までを設定したテンプレート通りにインサートする。

# 使い方

1. TASK_IDに好きな項目をいれる。

（idはkadopeのサイトからデベロッパーツールで拾う）

```js
const TASK_ID = {
  スプリントMTG: 6411,
  doda朝会: 6410,
  コーディング: 5540,
  TU全体共有会: 6166,
  doda夕会: 5994,
  レビュー会: 5785,
  タスク整理: 5541,
  設計: 5589,
  夕会: 6188,
  勉強会関連: 6183,
}
```

2. TASKSに好きな予定を入れる

time: タスクを挿入する時間
minutes: タスクを行った時間  
task_id: タスクのid

```js
const TASKS = [
  // 月
  [
    { time: '10:00', minutes: 60 * 0.5, task_id: TASK_ID.doda朝会 },
    { time: '11:30', minutes: 60 * 0.5, task_id: TASK_ID.コーディング },  
  ...
  ]

  // 火
  ...
]
```

4.  `index.js` を全てコピーし、 [https://kadope.bita.jp/](KADOPE)でコンソールを開く

5. 以下関数の引数に特定の月曜日の日付を入れて、実行
```js
insertOneWeekDays('2020-9-6');
```

6. リロード

