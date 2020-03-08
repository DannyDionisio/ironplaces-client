import React, {Component} from 'react';

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
  render() {
    return (
      <React.Fragment>
      <h1>Add Ironplace</h1>
      <div>
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" className="form-control" name="name" value={this.state.name} id="name"/>
          </div>
          <div class="form-group">
            <label for="typeoptions">Type</label>
            <select class="form-control" id="typeoptions" name="type" value={this.state.type} >
              <option>Restaurants</option>
              <option>Hotels</option>
              <option>Bars</option>
            </select>
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={this.state.address}/>
          </div>
          <div className="form-group">
            <label for="coordinates">Coordinates</label>
            <input type="text" className="form-control" id="coordinates" name="coordinates" value={this.state.coordinates}/>
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={this.state.description}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </React.Fragment> 
    );
  }
}

export default AddIronplaces;