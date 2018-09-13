const knex = require('knex')
const config = require('../knexfile').development
const conn = knex(config)

module.exports = {
  getStudents,
  getTimetable,
  updateTimetable,
  addStudent,
  getStudent, 
  addBook,
  getBook,
  updateStudent
}

function getStudents () {
  return conn('students').select()
}
function getStudent (timetable_Id) {
  return conn('students')
  .where('id', timetable_Id)
  .select()
}

function getTimetable () {
  return conn('students')
    .join('timetable', 'students.timetable_Id', 'timetable.id')
    .select()
}
function updateTimetable (timetable_Id, trackedArray) {
  return conn('timetable')
  .where('id', timetable_Id)
  .update({
    task_1: trackedArray[0],
    task_2: trackedArray[1],
    task_3: trackedArray[2],
    task_4: trackedArray[3],
    task_5: trackedArray[4],
  })
}

function addStudent (student) {
  return conn('timetable')
  .insert({})
  .then (res => {
    student.timetable_Id = res[0]
  return conn('students')
  .insert(student)
  }
)}

function addBook (book) {
  return conn('books')
  .insert(book)
  }

  function getBook () {
    return conn('books')
      .select()
  }

  function updateStudent (student) {
    return conn('student')
      .where('id', student.id)
      .update({
        name: student.name,
        profile_photo: photo.profile_photo
      })
  }