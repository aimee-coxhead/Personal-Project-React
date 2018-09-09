import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Students from './Students'
import Teacher from './Teacher'
import DisplayStudents from './DisplayStudents'
import EditTimetable from './EditTimetable'
import DisplayTimetable from './DisplayTimetable'
import ListenToReading from './ListenToReading'
import DrSeuss from './DrSeuss'
import WordWork from './WordWork'

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/students' component={Students} />
        <Route path='/students/display-timetable' component={DisplayTimetable} />
        <Route exact path='/students/listen-to-reading' component={ListenToReading} />
        <Route path='/students/listen-to-reading/dr-seuss' component={DrSeuss} />
        <Route exact path='/students/word-work' component={WordWork} />
        <Route exact path='/teacher' component={Teacher} />
        <Route path='/teacher/display-students' component={DisplayStudents} />
        <Route path='/teacher/edit-timetable/:id' component={EditTimetable} />
      </div>
    </Router>
  )
}

export default App
