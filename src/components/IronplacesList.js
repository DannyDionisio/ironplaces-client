import React, { Component } from "react";
import axios from "axios";
import { link, Link } from "react-router-dom";
import MapContainer from "./MapContainer";

class IronplacesList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfIronplaces: [] };
  }

  getAllIronplaces = () => {
    let type = "";

    if (this.props.type) type = "type=" + this.props.type;

    axios
      .get(`https://ironplaces-server.herokuapp.com/api/places?` + type)
      .then(responseFromApi => {
        this.setState({
          listOfIronplaces: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllIronplaces();
  }

  componentDidUpdate() {
    //  this.getAllIronplaces();
    console.log("test");
  }

  render() {
    return (
      <div>
        {this.state.listOfIronplaces.map(listOfIronplaces => {
          return (
            <div key={listOfIronplaces._id}>
              <Link to={`/ironplaces/${listOfIronplaces._id}`}>
                <h1>{listOfIronplaces.name}</h1>
              </Link>
            </div>
          );
        })}
        <div>
          <MapContainer listOfIronplaces={this.state.listOfIronplaces} />
        </div>
      </div>
    );
  }
}

export default IronplacesList;
