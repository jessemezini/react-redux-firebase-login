import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAuth } from '../selectors';
import { signIn, signOut } from '../actions';
import { Link } from 'react-router';

const contextTypes = {
  router: PropTypes.object.isRequired
}

class SignIn extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { router } = this.context;
    const { auth } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      router.replace({ pathname: '/sign-in' });
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      router.replace({ pathname: '/dashboard' });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.signIn(email, password);
  }

  render() {
    return (
      <form className="sign-in-form" onSubmit={this.handleSubmit}>
        <input type="email" ref="email" placeholder="Email" />
        <input type="password" ref="password" placeholder="Password" />
        <button type="submit">Sign in</button>
        <Link to={{ pathname: '/' }}>
          <input type="button" value="Back to home" />
        </Link>
      </form>
    );
  }
}

SignIn.contextTypes = contextTypes;

const mapStateToProps = createSelector(
  getAuth,
  auth => ({auth})
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signIn, signOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
