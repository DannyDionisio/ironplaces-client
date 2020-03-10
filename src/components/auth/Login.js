import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    // this.props.history gets defined automatically inside of a <Route />
    // since we have access to history here, but not inside of App.js,
    // we can pass a "callback" function, which defines the function here, to be executed back in App.js
    const callback = () => this.props.history.push('/login/adminview');
    this.props.loginFbaseUser(email, password, callback);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} id="loginEmail" onChange={ e => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label for="loginPassword">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} id="loginPassword" onChange={ e => this.handleChange(e)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p>Don't have account?
            <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;