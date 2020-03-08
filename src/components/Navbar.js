import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
  renderAuthLinks() {
    // console.log("navbar: props.loggedInUser -> ", this.props.loggedInUser);
    const {loggedInUser, logoutFbase} = this.props;
    if (!loggedInUser) {
      return (
        // same as using <React.Fragment>
        <>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </>
        // same as using </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li>Welcome, {loggedInUser.email}</li>
          <li><Link to="/" onClick={logoutFbase}>Log Out</Link></li>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <nav className="nav-style">
        <ul>
          {this.renderAuthLinks()}
          {/* <li><Link to="/projects">Projects</Link></li> */}
      </ul>
      </nav>
    );
  }
}





// class Navbar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="navbar">
//           <img src={logo} alt="logo"/>
//           <h1>Ironplaces</h1>
//           <div className="dropdown">
//             <button className="btn btn-sec dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Login
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a className="dropdown-item" href="/login/admin">Admin</a>
//               <a className="dropdown-item" href="/login/student">Student</a>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
      
//     )
//   }
// }

export default Navbar;