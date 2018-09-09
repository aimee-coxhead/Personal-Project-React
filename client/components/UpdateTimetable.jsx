import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class UpdateTimetable extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     options: ["Word Work", "Listen to Reading","Read to Someone", "Work on Writing", "Read to Self"]
    }
  }
  // don't need a component did mount

render () {
    return (
        <div>
          <h1>Choose Your Activities</h1>
          <div>
          {this.state.options.map(option => {
            return <button>{option}</button>})
          }
          </div>
          <Link to="/students">Go Home</Link>
        </div>
      )
    }
  }