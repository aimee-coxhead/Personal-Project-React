import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayTimetable (props) {

  return (
    <div>
      <h1>Daily 5 Timetable</h1>
      <Link to="/students">Go Home</Link>
    </div>
  )
}