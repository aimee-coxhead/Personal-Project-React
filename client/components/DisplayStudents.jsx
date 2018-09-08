import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayStudents (props) {

  return (
    <div>
      <div>Click on your Name</div>
      <Link to="/">Go Home</Link>
    </div>
  )
}