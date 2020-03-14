import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      type: ''
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    // this.props.history gets defined automatically inside of a <Route />
    // since we have access to history here, but not inside of App.js,
    // we can pass a "callback" function, which defines the function here, to be executed back in App.js
    const callback = () => this.props.history.push('/projects');
    this.props.createNewFbaseUser(email, password, callback);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    return (
      <React.Fragment>
        <div className="signupform">
          <h1>Sign Up</h1>
          <form className="formctn" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label for="signupEmail">Email:</label>
              <input type="email" className="form-control" name="email" value={this.state.username} id="loginEmail" onChange={ e => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label for="signupPassword">Password:</label>
              <input type="password" className="form-control" name="password" value={this.state.password} id="signupPassword" onChange={ e => this.handleChange(e)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p>Already have account?
            <Link to={"/login"}> Login</Link>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;