import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}!</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
          <br/>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;
