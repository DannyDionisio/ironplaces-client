import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="btnadmcontainer">
          <h1>Admin View</h1>
          <div className="admin-form">
            <Link to="/login/adminview/addironplace">
              <button className="admbtn">Add IronPlace</button>
            </Link>
            <Link to="/">
              <button className="admbtn">View All IronPlaces</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminView;