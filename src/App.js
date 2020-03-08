import React, { Component } from "react";
import './index.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddIronplaces from "./components/AddIronplaces";
import Login from "./components/Login";
import AdminView from "./components/AdminView";
import Homepage from "./components/Homepage";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // loggedInUser: null,
      // xyz: '',
      loggedInUser: {
        uid: 'xyz',
      }
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="main-container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' render={(props) => <Homepage uid={this.state.loggedInUser.uid} {...props} />}/>
            <Route exact path='/login' render={(props) => <Login  {...props} />}/>
            <Route exact path='/login/adminview' render={(props) => <AdminView uid={this.state.loggedInUser.uid} {...props} />}/>
            <Route exact path='/login/adminview/addironplace' render={(props) => <AddIronplaces uid={this.state.loggedInUser.uid} {...props} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
