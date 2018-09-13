import React from 'react'
import { Link } from 'react-router-dom'

export default function ListenToReading (props) {

    return (
      <div>
        <h1>Listen to Reading</h1>
        <div className="row">
        <Link to="/students/listen-to-reading/dr-seuss">
           <button className="buttons">Dr. Seuss Books</button>
        </Link>
        <Link to="/students/listen-to-reading/animals">
           <button className="buttons">Animals</button>
        </Link>
        <Link to="/students/listen-to-reading/random">
           <button className="buttons">Random</button>
        </Link>
        </div>
        <div>
          <Link to="/students"><button className="buttons">Go Home</button></Link>
        </div>
      </div>
    )
  }