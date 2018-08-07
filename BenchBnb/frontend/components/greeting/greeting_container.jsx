import React from 'react';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: currentUser => dispatch(logout(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
