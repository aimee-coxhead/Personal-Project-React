import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Students from './Students'
import Teacher from './Teacher'
import DisplayStudents from './DisplayStudents'
import UpdateTimetable from './UpdateTimetable'
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
        <Route path='/students/display-students' component={DisplayStudents} />
        <Route path='/students/update-timetable/:id' component={UpdateTimetable} />
        <Route exact path='/students/listen-to-reading' component={ListenToReading} />
        <Route path='/students/listen-to-reading/dr-seuss' component={DrSeuss} />
        <Route exact path='/students/word-work' component={WordWork} />
        <Route exact path='/teacher' component={Teacher} />
      </div>
    </Router>
  )
}

export default App
