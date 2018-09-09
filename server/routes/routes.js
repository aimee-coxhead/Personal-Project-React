const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/teacher/display-students', (req, res) => {
  db.getStudents()
    .then(students => {
      res.json({students})
    })
  })

module.exports = router
