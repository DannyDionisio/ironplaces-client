import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapStyles = {
  width: "50%",
  height: "50%"
};
export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 38.711325,
          lng: -9.1269251
        }}
      >
        {this.props.listOfIronplaces.map(ironPlace => {
          return (
            <Marker
              key={ironPlace._id}
              label={ironPlace.name}
              position={{ lat: ironPlace.latitude, lng: ironPlace.longitude }}
            />
          );
        })}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA1hwTqs6Qq0bbKfqZVFIW915H4WzYifZI"
})(MapContainer);
