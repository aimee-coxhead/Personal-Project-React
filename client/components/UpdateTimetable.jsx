import React from 'react'
import { Redirect } from 'react-router-dom'
import request from 'superagent'

export default class UpdateTimetable extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     options: ["Word Work", "Listen to Reading","Read to Someone", "Work on Writing", "Read to Self"],
     tracked:[],
     timetable_Id: props.match.params.id
    }
  }
  // don't need a component did mount

  handleClick (option) {
  let array = this.state.options
  let newArray = array.filter((element) => element !== option)
  let trackedArray = this.state.tracked
  trackedArray.push(option)
  
  if (newArray.length === 0){
   request
      .post(`http://localhost:3000/api/v1/routes/students/update-timetable/${this.state.timetable_Id}`)
      .send(trackedArray)
      .then((res) => {this.setState({options: newArray, tracked: trackedArray, timetable_Id: this.state.timetable_Id})
  })
      .catch(err => {
        console.error(err)
      })
    }else {
      this.setState({options: newArray, tracked: trackedArray, timetable_Id:this.state.timetable_Id})
    }
  }

render () {
  if (this.state.options.length === 0){
    return (
      <Redirect to="/students/display-timetable" />
          )
  }

    return (
        <div>
          <h1>Choose Your Activities in Order</h1>
          <div>
          {this.state.options.map(option => {
            return <button calssName="button-choice" onClick={() => this.handleClick(option)}>{option}</button>})
          }
          </div>
        </div>
      )
    }
  }
