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
    this.state = { loggedInUser: null };
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
  }

  saveUserToServer = (name, isAdmin, uId) => {

  }

  createNewFbaseUser = (email, password, callbackNavToProj) => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(resp => {
      // console.log(resp);
      this.setState({loggedInUser: resp.user});
      // saveUserToServer();
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
      callbackNavToProj();
    })
    .catch(err => alert(err));
  }

  logoutFbaseUser = () => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-out
    firebase.auth().signOut()
    .then(resp => {
      console.log("User has been logged out", resp);
      this.setState({loggedInUser: null});
    })
    .catch(err => alert(err));
  }
  
  render() {
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
            <Route exact path='/' render={(props) => <Homepage uid={this.state.loggedInUser} {...props} />}/>
            <Route exact path='/login/adminview' render={(props) => <AdminView uid={this.state.loggedInUser} {...props} />}/>
            <Route exact path='/login/adminview/addironplace' render={(props) => <AddIronplaces uid={this.state.loggedInUser} {...props} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
