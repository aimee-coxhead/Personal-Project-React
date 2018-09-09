import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class UpdateTimetable extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     options: ["Word Work", "Listen to Reading","Read to Someone", "Work on Writing", "Read to Self"],
     tracked:[]
    }
  }
  // don't need a component did mount

  handleClick (option) {
  let array = this.state.options
  let newArray = array.filter((element) => element !== option)
  let trackedArray = this.state.tracked
  trackedArray.push(option)
  console.log(trackedArray)
  if (newArray.length === 0){
   request
      .post(`http://localhost:3000/api/v1/routes/students/update-timetable/${id}`)
      .send(trackedArray)
      .then((res) => {this.setState({options: newArray, tracked: trackedArray})
  })
      .catch(err => {
        console.error(err)
      })
    }else {
      this.setState({options: newArray, tracked: trackedArray})
    }
  }

render () {
    return (
        <div>
          <h1>Choose Your Activities in Order</h1>
          <div>
          {this.state.options.map(option => {
            return <button onClick={() => this.handleClick(option)}>{option}</button>})
          }
          </div>
          <Link to="/students">Go Home</Link>
        </div>
      )
    }
  }
