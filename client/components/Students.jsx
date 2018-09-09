import React from 'react'
import { Link } from 'react-router-dom'

export default function Students (props) {

  return (
    <div>
      <h1>Students Page</h1>
      <Link to= "/students/display-timetable">
        <button>Display Timetable</button>
      </Link>
      <Link to="/students/display-students">
        <button>Edit Daily 5 Timetable</button>
      </Link>
      <div>
        <h2>Activities</h2>
        <Link to="/students/listen-to-reading">
          <button>Listen to Reading</button>
        </Link>
        <Link to="/students/word-work">
        <button>Word Work</button>
        </Link>
        <button>Work on Writing</button>
        <button>Read to Self</button>
        <button>Read to Someone</button>
      </div>
    </div>
  )
}
