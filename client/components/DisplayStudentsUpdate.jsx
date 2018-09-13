import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class DisplayStudentsUpdate extends React.Component {
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
        <h1>Click on the Name or Photo of the child you would like to Update</h1>
        <div>
          {this.state.students.map(student => {
            return <div key={student.id}><Link to={`/teacher/update-student/${student.timetable_Id}`}><div className="student"><img className='image' src={student.profile_photo} /><h4>{student.name}</h4></div></Link></div>
          })}
        </div>
        <Link to="/students"><button>Back</button></Link>
      </div>
    )
  }
}
