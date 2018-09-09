import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/students">
        <button>Students</button>
      </Link>
      <Link to="/teacher">
        <button>Teacher</button>
      </Link>
    </div>
  )
}
