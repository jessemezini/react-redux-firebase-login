import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOut } from './Auth/actions';
import { Link } from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="sign-in-form">
        <Link to={{ pathname: '/' }}>
          <input type="button" value="Back to home" />
        </Link>
        <Link to={{ pathname: '/' }}>
          <input type="button" onClick={this.props.signOut} value="Sign out" />
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signOut}, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);
