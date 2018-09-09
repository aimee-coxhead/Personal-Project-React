const knex = require('knex')
const config = require('../knexfile').development
const conn = knex(config)

module.exports = {
  getStudents,
  getTimetable
}

function getStudents () {
  return conn('students').select()
}

function getTimetable () {
  return conn('students')
    .join('timetable', 'students.timetable_Id', 'timetable.id')
    .select()
}