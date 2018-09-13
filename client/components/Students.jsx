import React from 'react'
import { Link } from 'react-router-dom'

export default function Students (props) {

  return (
    <div>
      <h1>Daily 5</h1>
      <h2>Timetable</h2>
      <div class="row">
      <Link to= "/students/display-timetable">
        <button className="buttons">Display Timetable</button>
      </Link>
      <Link to="/students/display-students">
        <button className="buttons">Edit Daily 5 Timetable</button>
      </Link>
      </div>
      <div>
        <h2>Activities</h2>
        <div class="row">
        <Link to="/students/listen-to-reading">
          <button className="buttons">Listen to Reading</button>
        </Link>
        <Link to="/students/word-work">
        <button className="buttons">Word Work</button>
        </Link>
        <Link to="/students/work-on-writing">
        <button className="buttons">Work on Writing</button>
        </Link>
        <Link to="/students/read-to-self">
        <button className="buttons">Read to Self</button>
        </Link>
        <Link to="/students/read-to-someone">
        <button className="buttons">Read to Someone</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
