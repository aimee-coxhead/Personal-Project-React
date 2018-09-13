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
  let id = req.params.id
  console.log(req.body)
    db.updateTimetable(id, req.body)
    .then(timetable => {
        res.json({timetable})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

router.post('/teacher/add-student', (req, res) => {
  const student = req.body
  console.log(req.body)
  db.addStudent(student)
  .then (id => {
    res.redirect('/')
  })
})

router.post('/students/update-timetable/:id', (req, res) => {
  let id = req.params.id
  console.log(req.body)
    db.updateStudent(id, req.body)
    .then(student => {
        res.json({student})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

  router.get('/teacher/display-student', (req, res) => {
    db.getStudent()
      .then(student => {
        res.json({student})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
    })

    router.post('/teacher/add-book', (req, res) => {
      const book = req.body
      console.log(req.body)
      db.addBook(book)
      .then (() => {
        res.redirect('/')
      })
    })

    router.get('/students/random', (req, res) => {
      db.getBooks()
        .then(book => {
          res.json({book})
        })
        .catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    })


    router.post('/teacher/update-student/:id', (req, res) => {
      const student = {
        id: req.params.id,
        name: req.body.name,
        profile_photo: req.body.profile_photo
      }
      db.updateStudent(student)
        .then(() => {
          res.redirect('/')
        })
    })
  

module.exports = router
