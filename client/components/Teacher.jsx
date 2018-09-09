import React from 'react'
import { Link } from 'react-router-dom'

export default function Teacher (props) {

  return (
    <div>
      <h1>Teacher's Page</h1>
      <button>Add Student</button>
      <button>Edit Student</button>
      <button>Delete Student</button>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}
