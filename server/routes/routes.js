const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/students/display-students', (req, res) => {
  db.getStudents()
    .then(students => {
      res.json({students})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })

router.get('/students/display-timetable', (req, res) => {
    db.getTimetable()
      .then(timetable => {
        res.json({timetable})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

router.post('/students/update-timetable/:id', (req, res) => {

    db.updateTimetable()
    .then(timetable => {
        res.json({timetable})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })
module.exports = router
