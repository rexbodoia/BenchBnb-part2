import SessionForm from './session_form';
import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login',
  navLink: <Link to='/signup'>Sign up</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
