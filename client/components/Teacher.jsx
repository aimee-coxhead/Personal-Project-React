import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStudent (props) {

  return (
    <div>
      <h1>Teacher's Page</h1>
      <h2>Students</h2>
      <div className="row">
      <Link to= "/teacher/add-student">
      <button className="buttons">Add Student</button>
      </Link>
      <Link to= "/teacher/delete-student">
      <button className="buttons">Delete Student</button>
      </Link>
      <Link to= "/teacher/display-students-update">
      <button className="buttons">Update Student</button>
      </Link>
      </div>
      <h2>Activities</h2>
      <div className="row">
      <Link to= "/teacher/add-book">
      <button className="buttons">Add a book</button>
      </Link>
      </div>
      <div className="row">
        <Link to="/"><button className="button-back">Go Home</button></Link>
      </div>
    </div>
  )
}
