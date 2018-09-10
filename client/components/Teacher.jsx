import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStudent (props) {

  return (
    <div>
      <h1>Teacher's Page</h1>
      <Link to= "/teacher/add-student">
      <button>Add Student</button>
      </Link>
      <Link to= "/teacher/delete-student">
      <button>Delete Student</button>
      </Link>
      <button>Edit Student</button>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}
