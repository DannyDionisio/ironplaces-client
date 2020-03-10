import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminView extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Admin View</h1>
        <div className="btnadmcontainer">
          <Link to="/login/adminview/addironplace">
            <button className="admbtn">Add IronPlace</button>
          </Link>
          <Link to="/">
            <button className="admbtn">View All IronPlaces</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminView;