import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Students from './Students'
import Teacher from './Teacher'
import DisplayStudents from './DisplayStudents'
import EditTimetable from './DisplayTimetable'
import DisplayTimetable from './DisplayTimetable'

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/students' component={Students} />
        <Route path='/students/display-students' component={DisplayStudents} />
        <Route path='/students/display-timetable' component={DisplayTimetable} />
        <Route path='/students/edit-timetable/:id' component={EditTimetable} />
        <Route path='/teacher' component={Teacher} />
      </div>
    </Router>
  )
}

export default App
