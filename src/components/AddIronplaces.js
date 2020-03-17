import React, {Component} from 'react';
import axios from 'axios';

class AddIronplaces extends Component {
  constructor(props){
    super(props);
    this.state = { 
        name: "", 
        type: "",
        address: "",
        coordinates: "",
        description: "" 
    };
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const type = this.state.type;
    const address = this.state.address;
    const coordinates = this.state.coordinates;
    const description = this.state.description;
    const headers = {'Authorization': this.props.jwt};
    axios.post("http://localhost:5000/api/addplace", { name, type, address, coordinates, description }, {headers:headers})
    .then( () => {
      this.setState({name: "", type: "", address: "", coordinates: "", description: ""});
      // after submitting the form, redirect to homepage
      this.props.history.push('/');
    })
    .catch( error => console.log(error))
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <form onSubmit={this.handleFormSubmit} className="addformctn">
          <h1>Add Ironplace</h1>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" className="form-control" name="name" value={this.state.name} id="name" onChange={e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label for="typeoptions">Type:</label>
            <select className="form-control" id="typeoptions" name="type" value={this.state.type} onChange={e => this.handleChange(e)}>
              <option>Restaurants</option>
              <option>Hotels</option>
              <option>Bars</option>
            </select>
          </div>
          <div className="form-group">
            <label for="address">Address:</label>
            <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label for="coordinates">Coordinates:</label>
            <input type="text" className="form-control" id="coordinates" name="coordinates" value={this.state.coordinates} onChange={e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </React.Fragment> 
    );
  }
}

export default AddIronplaces;