import React, { Component } from "react";
import axios from "axios";

class AddIronplaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      address: "",
      latitude: "",
      longitude: "",
      discount: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const type = this.state.type;
    const address = this.state.address;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const discount = this.state.discount;
    const headers = { Authorization: this.props.jwt };
    axios
      .post(
        "https://ironplaces-server.herokuapp.com/api/addplace",
        { name, type, address, latitude, longitude, discount },
        { headers: headers }
      )
      .then(() => {
        this.setState({
          name: "",
          type: "",
          address: "",
          latitude: "",
          longitude: "",
          discount: ""
        });
        // after submitting the form, redirect to homepage
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleFormSubmit} className="addformctn">
            <h1>Add Ironplace</h1>
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                id="name"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="type">Type:</label>
              <select
                className="form-control"
                id="type"
                name="type"
                value={this.state.type}
                onChange={e => this.handleChange(e)}
              >
                <option>Restaurants</option>
                <option>Hotels</option>
                <option>Bars</option>
              </select>
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={this.state.address}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <h5>Coordinates:</h5>
              <label for="latitude">Latitude:</label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                name="latitude"
                value={this.state.latitude}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="longitude">Longitude:</label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                name="longitude"
                value={this.state.longitude}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="discount">Discount:</label>
              <input
                type="text"
                className="form-control"
                id="discount"
                name="discount"
                value={this.state.description}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddIronplaces;
