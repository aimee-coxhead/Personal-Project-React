
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetable').del()
    .then(function () {
      // Inserts seed entries
      return knex('timetable').insert([
        {id: 99901, task_1: 'Listen to Reading', task_2: 'Work on Writing', task_3: 'Read to Self', task_4: 'Word Work', task_5: 'Read to Someone'},
        {id: 99902, task_1: 'Word Work', task_2: 'Read to Self', task_3: 'Listen to Reading', task_4: 'Read to Someone', task_5: 'Work on Writing'},
        {id: 99903, task_1: 'Work on Writing', task_2: 'Listen to Reading', task_3: 'Read to Someone', task_4: 'Read to Self', task_5: 'Word Work'}
      ])
    })
}
