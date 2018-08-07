import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username}></input>
          </label>
          <label>Password:
            <input type="password" value={this.state.password}></input>
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
        {this.props.navLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
