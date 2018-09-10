import React from 'react'
import { Link } from 'react-router-dom'

export default function Animals (props) {

  return (
    <div>
      <h1>Animals</h1>
      <div class="row">
        <div class="three columns">
          <a href="https://safeshare.tv/x/ss5b5eedc2a4f38"><img className="image-book" src="/images/Animals/OwlBabies.jpg"/><h5>Owl Babies</h5></a>
        </div>
        <div class="three columns">
          <a href="http://safeshare.tv/w/gKiIPyHEcQ"><img className="image-book" src="/images/Animals/GiraffesCan'tDance.jpg" /><h5>Giraffes Can't Dance</h5></a>
        </div>
        <div class="three columns">
          <a href="http://safeshare.tv/w/RylJZRKTSt"><img className="image-book" src="/images/Animals/Stellaluna.jpg" /><h5>Stellaluna</h5></a>
        </div>
        <div class="three columns">
          <a href=""><img className="image-book" src="/images/" /><h5></h5></a>
        </div>
      </div>
      <div>
        <Link to="/students"><button>Go Home</button></Link>
        <Link to="/students/listen-to-reading"><button>Go Back</button></Link>
      </div>
      </div>
  )
}
