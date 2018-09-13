import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class Randon extends React.Component {
  constructor (props)  {
  super (props)
  this.state = {
     book: []
    }
  }

  componentDidMount () {
    this.getBook()
  }

  getBook () {
    request
      .get('http://localhost:3000/api/v1/routes/students/random')
      .then(res => {
        this.setState({
          book: res.body.book
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

render () {
    return (
      <div>
      <h1>Random Books</h1>
      <div>
            {this.state.book.map(bookRow => {
              return <div key={bookRow.id}>{bookRow.title} {bookRow.link} {bookRow.photo}</div>
            })}
          </div>
      <Link to="/students"><button className="buttons">Go Home</button></Link>
    </div>
  )}
  }
