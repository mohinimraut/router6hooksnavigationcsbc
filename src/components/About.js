import React from 'react';
import {Link} from 'react-router-dom';
function About() {
  return (
    <div>
    <h1>About</h1>
    <p>Thiss is a Home page of our awesome App</p>
    <p>And here we are learning about Router</p>
    <li><Link to="/user/mohini" state={{name:"mohini Raut",age:18}}>Mohini</Link></li>
    <Link to="/">Go to Home Page</Link>
  </div>
  )
}

export default About
