import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul className="menu">
          <li>
            <Link className="btn btn-xs btn-default" to={{ pathname: "/sign-in" }} >Sign In</Link>
          </li>
          <li>
            <Link className="btn btn-xs btn-default" to={{ pathname: "/dashboard" }} >Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
