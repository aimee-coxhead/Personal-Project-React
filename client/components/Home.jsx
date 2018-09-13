import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="row">
      <Link to="/students">
        <button className="buttons">Students</button>
      </Link>
      <Link to="/teacher">
        <button className="buttons">Teacher</button>
      </Link>
      </div>
    </div>
  )
}
