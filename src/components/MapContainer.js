import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapStyles = {
  width: "60%",
  height: "48%"
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
        <Marker
          position={{ lat: 38.7109739, lng: -9.1261681 }}
          title={"Ironhack"}
          // icon="https://www.ironhack.com/assets/icons/ironhack_logos/logo.svg"
        />
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
