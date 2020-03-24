import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";

class IronplacesList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ironplaceslist">
          {this.props.listOfIronplaces.map(listOfIronplaces => {
            return (
              <div key={listOfIronplaces._id} className="placename">
                <h1 to={`/ironplaces/${listOfIronplaces._id}`}>
                  <h2>{listOfIronplaces.name}</h2>
                  <p>{listOfIronplaces.discount}</p>
                </h1>
              </div>
            );
          })}
        </div>
        <div className="mapplaces">
          <MapContainer listOfIronplaces={this.props.listOfIronplaces} />
        </div>
      </React.Fragment>
    );
  }
}

export default IronplacesList;
