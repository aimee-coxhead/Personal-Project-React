import React from 'react'
import { Link } from 'react-router-dom'

export default function Random (props) {

  return (
    <div>
      <h1>Random Books</h1>
      <div>
        <Link to="/students"><button>Go Home</button></Link>
        <Link to="/students/listen-to-reading"><button>Go Back</button></Link>
      </div>
    </div>
  )
}