import React from 'react'
import { Link } from 'react-router-dom'

export default function AddBook () {

        return (
          <div>
            <h1>Add a Book</h1>
              <form action="/api/v1/routes/teacher/add-book" method="post">
              <label>Title:</label><input type="text" name="title" />
              <label>Photo:</label><input type="text" name="photo"/>
              <label>Link:</label><input type="text" name="link"/>
              <button className="buttons">Add book</button>
              <Link to="/teacher"><button className="button-back">Back</button></Link>
            </form>
          </div>
        )
      }