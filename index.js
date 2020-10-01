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
};

const TASKS = [
  // 月
  [
    { time: '10:00', minutes: 60 * 0.5, task_id: TASK_ID.doda朝会 },
    { time: '11:30', minutes: 60 * 0.5, task_id: TASK_ID.コーディング },
    { time: '12:00', minutes: 60 * 1, task_id: TASK_ID.レビュー会 },
    { time: '14:00', minutes: 60 * 1, task_id: TASK_ID.勉強会関連 },
    { time: '15:00', minutes: 60 * 3, task_id: TASK_ID.コーディング },
    { time: '18:00', minutes: 60 * 0.5, task_id: TASK_ID.夕会 },
    { time: '18:30', minutes: 60 * 0.5, task_id: TASK_ID.doda夕会 },
    { time: '19:00', minutes: 60 * 1, task_id: TASK_ID.コーディング },
  ],

  // 火
  [
    { time: '10:00', minutes: 60 * 0.5, task_id: TASK_ID.doda朝会 },
    { time: '11:30', minutes: 60 * 1.5, task_id: TASK_ID.コーディング },
    { time: '14:00', minutes: 60 * 4.5, task_id: TASK_ID.コーディング },
    { time: '18:30', minutes: 60 * 0.5, task_id: TASK_ID.doda夕会 },
    { time: '19:00', minutes: 60 * 1, task_id: TASK_ID.コーディング },
  ],

  // 水
  [
    { time: '10:00', minutes: 60 * 3, task_id: TASK_ID.スプリントMTG },
    { time: '14:00', minutes: 60 * 2, task_id: TASK_ID.スプリントMTG },
    { time: '16:00', minutes: 60 * 1, task_id: TASK_ID.タスク整理 },
    { time: '17:00', minutes: 60 * 1.5, task_id: TASK_ID.設計 },
    { time: '18:30', minutes: 60 * 0.5, task_id: TASK_ID.doda夕会 },
  ],

  // 木
  [
    { time: '10:00', minutes: 60 * 0.5, task_id: TASK_ID.doda朝会 },
    { time: '10:30', minutes: 60 * 2, task_id: TASK_ID.コーディング },
    { time: '12:30', minutes: 60 * 0.5, task_id: TASK_ID.TU全体共有会 },
    { time: '14:00', minutes: 60 * 4.5, task_id: TASK_ID.コーディング },
    { time: '18:30', minutes: 60 * 0.5, task_id: TASK_ID.doda夕会 },
  ],

  // 金
  [
    { time: '10:00', minutes: 60 * 0.5, task_id: TASK_ID.doda朝会 },
    { time: '10:30', minutes: 60 * 2.5, task_id: TASK_ID.コーディング },
    { time: '14:00', minutes: 60 * 4, task_id: TASK_ID.コーディング },
    { time: '18:00', minutes: 60 * 0.5, task_id: TASK_ID.夕会 },
    { time: '18:30', minutes: 60 * 0.5, task_id: TASK_ID.doda夕会 },
  ],
]

function formatDate(date, i) {
  const dateObj = new Date(date);
  dateObj.setDate(dateObj.getDate() + i);
  return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
}

function insertOneWeekDays(startDate) {
  const isMonday = new Date(startDate).getDay() === 1
  if(!isMonday) {
    console.error(`${startDate} は月曜日ではありません。`)
    return
  }

  TASKS.forEach((taskList, i) => {
    taskList.forEach((task) => {
      api('insert_record.php', { ...task, date: formatDate(startDate, i) }, (ret) => {
        records[ret.record.record_id] = ret.record;
      });
    });
  });

  return console.log('正常にインサートされました。リロードしてください。')
}

// 必ず月曜日を入れてください
insertOneWeekDays('2020-9-6');
