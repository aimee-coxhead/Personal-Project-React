const knex = require('knex')
const config = require('../knexfile').development
const conn = knex(config)

module.exports = {
  getStudents,
  getTimetable,
  updateTimetable
}

function getStudents () {
  return conn('students').select()
}

function getTimetable () {
  return conn('students')
    .join('timetable', 'students.timetable_Id', 'timetable.id')
    .select()
}
function updateTimetable (id, trackedArray) {
  return conn('timetable')
  .where('id', id)
  .update({
    task_1: trackedArray[0],
    task_2: trackedArray[1],
    task_3: ftrackedArray[2],
    task_4: trackedArray[3],
    task_5: trackedArray[4],
  })
}
