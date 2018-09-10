import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class DisplayStudents extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     students: []
    }
  }

  componentDidMount () {
    this.getStudents()
  }

  getStudents () {
    request
      .get('http://localhost:3000/api/v1/routes/students/display-students')
      .then(res => {
        this.setState({
          students: res.body.students
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div>
        <h1>Click on your  Name</h1>
        <div>
          {this.state.students.map(student => {
            return <div key={student.id}><Link to={`/students/update-timetable/${student.timetable_Id}`}>{student.name} <img src={student.profile_photo} /></Link></div>
          })}
        </div>
        <Link to="/students">Back</Link>
      </div>
    )
  }
}
