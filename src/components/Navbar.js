import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={logo} alt="logo"/>
          <h1>Ironplaces</h1>
          <div className="dropdown">
            <button className="btn btn-sec dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Login
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/login/admin">Admin</a>
              <a className="dropdown-item" href="/login/student">Student</a>
            </div>
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

export default Navbar;