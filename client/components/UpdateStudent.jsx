import React from 'react'

import request from 'superagent'

export default class DisplayStudentsUpdate extends React.Component {
    constructor (props)  {
    super (props)
    this.state = {
    id: props.match.params.id
    }
    }

    componentDidMount () {
        this.getStudent()
      }

      getStudent () {
        request
          .get('http://localhost:3000/api/v1/routes/teacher/display-student')
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
            <h1>Update Student</h1>
              <form action="/api/v1/routes/teacher/update-student/:id" method="post">
              <div></div>
              <label>Name:</label><input type="text" name="name" />
              <div></div>
              <label>Photo:</label><input type="text" name="profile_photo"/>
              <button className="buttons">Update Student</button>
            </form>
          </div>
        )
      } 
    }