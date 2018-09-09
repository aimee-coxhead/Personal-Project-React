import React from 'react'
import { Link } from 'react-router-dom'

export default function ListenToReading (props) {

    return (
      <div>
        <h1>Listen to Reading</h1>
        <div>
        <Link to="/students/listen-to-reading/dr-seuss">
           <button>Dr. Seuss Books</button>
        </Link>
        <Link to="/students/listen-to-reading/animals">
           <button>Animals</button>
        </Link>
        <Link to="/students/listen-to-reading/random">
           <button>Random</button>
        </Link>
        </div>
        <div>
          <Link to="/students">Go Home</Link>
        </div>
      </div>
    )
  }