import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from "firebase";

import Navbar from "./components/Navbar";
import AddIronplaces from "./components/AddIronplaces";
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AdminView from "./components/AdminView";
import Homepage from "./components/Homepage";

import './index.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    // when loggedInUser is set from FireBase Auth,
    // it will be an object with lots of keys, two useful ones
    // we can use are: loggedInUser.uid and loggedInUser.email :)
    this.state = {
      loggedInUser: null,
      jwt: '',
    };
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAhTN1_TEcmNT3xhnId2U6mISUrqSXwEpg",
      authDomain: "ironplaces-auth.firebaseapp.com",
      databaseURL: "https://ironplaces-auth.firebaseio.com",
      projectId: "ironplaces-auth",
      storageBucket: "ironplaces-auth.appspot.com",
      messagingSenderId: "420598064107",
      appId: "1:420598064107:web:745862904ecfcf002c6fae",
    });

    const loggedInUser = JSON.parse(window.sessionStorage.getItem('fbaseUser'));
    const jwt = window.sessionStorage.getItem('fbaseJwt');
    if (loggedInUser && jwt && !this.state.loggedInUser) {
      this.setState({loggedInUser, jwt});
    }
  }

  getJWT(user) {
    user.getIdToken()
    .then(resp => {
      this.setState({jwt: resp});
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
      window.sessionStorage.setItem('fbaseUser', JSON.stringify(user));
      window.sessionStorage.setItem('fbaseJwt', resp);
    })
    .catch(err => console.log(err));
  }

  createNewFbaseUser = (email, password, callbackNavToProj) => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(resp => {
      // console.log(resp);
      this.setState({loggedInUser: resp.user});
      this.getJWT(resp.user);
      callbackNavToProj();
    })
    .catch(err => alert(err));
  }

  loginFbaseUser = (email, password, callbackNavToProj) => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp => {
      // console.log(resp);
      this.setState({loggedInUser: resp.user});
      // this.props.history.push('/projects'); --> this will cause error
      // we do not have access to this.props.history here!
      // so we can use a calllback function instead :)
      this.getJWT(resp.user);
      callbackNavToProj();
    })
    .catch(err => alert(err));
  }

  logoutFbaseUser = () => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-out
    firebase.auth().signOut()
    .then(resp => {
      console.log("User has been logged out", resp);
      this.setState({loggedInUser: null, jwt: ''});
      window.sessionStorage.removeItem('fbaseUser');
      window.sessionStorage.removeItem('fbaseJwt');
    })
    .catch(err => alert(err));
  }
  
  render() {
    const {loggedInUser, jwt} = this.state;
    const uid = loggedInUser ? loggedInUser.uid : null;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="main-container">
            <Navbar loggedInUser={this.state.loggedInUser} logoutFbase={this.logoutFbaseUser}/>
          </div>
          <Switch>
            <Route exact path='/signup' render={(props) => <Signup createNewFbaseUser={this.createNewFbaseUser} {...props} />} />
            <Route exact path='/login'  render={(props) => <Login loginFbaseUser={this.loginFbaseUser} {...props} />} />
            {/* <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" component={ProjectDetails} />
            <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> */}
            <Route exact path='/' render={(props) => <Homepage uid={this.state.loggedInUser} jwt={jwt} {...props} />}/>
            <Route exact path='/login/adminview' render={(props) => <AdminView uid={this.state.loggedInUser} jwt={jwt} {...props} />}/>
            <Route exact path='/login/adminview/addironplace' render={(props) => <AddIronplaces uid={this.state.loggedInUser} jwt={jwt} {...props} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
