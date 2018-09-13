import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStudent () {

        return (
          <div>
            <h1>Add Student</h1>
              <form action="/api/v1/routes/teacher/add-student" method="post">
              <label>Name:</label><input type="text" name="name" />
              <label>Photo:</label><input type="text" name="profile_photo"/>
              <button className="buttons">Add Student</button>
              <Link to="/teacher"><button className="button-back">Back</button></Link>
            </form>
          </div>
        )
      }

