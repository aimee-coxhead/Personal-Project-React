import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class DisplayTimetable extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     timetable: []
    }
  }

  componentDidMount () {
    this.getTimetable()
  }

  getTimetable () {
    request
      .get('http://localhost:3000/api/v1/routes/students/display-timetable')
      .then(res => {
        this.setState({
          timetable: res.body.timetable
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

render () {
    return (
      <div>
      <h1>Daily 5 Timetable</h1>
      <div>
            {this.state.timetable.map(timetableRow => {
              return <div key={timetableRow.id}>{timetableRow.name} {timetableRow.task_1} {timetableRow.task_2} {timetableRow.task_3} {timetableRow.task_4} {timetableRow.task_5}</div>
            })}
          </div>
      <Link to="/students"><button className="buttons">Go Home</button></Link>
    </div>
  )}
  }
