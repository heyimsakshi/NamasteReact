// Functional based Component =>
// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About;

// Class based Component =>

import { Component } from 'react'

import UserContext from '../utils/UserContext';
import UserClass from './UserClass';
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>About</h1>
          <h2>Namaste React Series</h2>
          <UserClass name={"Sakshi"} location={"Nepal"} contact={"@sakshi"} />
          <div>
            Logged In User : 
            <UserContext.Consumer>
              { (data) => <h1 className='font-bold'> { data?.loggedInUser }</h1> }
            </UserContext.Consumer>
          </div>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default About;