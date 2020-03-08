import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
        email: "", 
        password: "" 
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <div>
          <form>
            <div className="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} id="loginEmail"/>
            </div>
            <div className="form-group">
              <label for="loginPassword">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} id="loginPassword"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;