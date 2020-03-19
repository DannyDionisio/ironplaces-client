import React, { Component } from 'react';
import logo from '../logo.svg';
import garfo from '../garfo.svg';
import cama from '../cama.svg';
import cinema from '../cinema.svg';
import creport from '../course-report.svg';
import switchup from '../switchup.svg';
import florida from '../florida-education.svg';
import IronplacesList from "./IronplacesList";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { type: null };
}
  onClickType = (event) => {
    this.setState({
      type: event.target.id
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="container-description">
            <h1>Discover Heden's Area</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere metus urna, ac aliquet arcu suscipit nec. Aliquam a magna quis ipsum tristique consectetur non eu leo. Proin scelerisque diam libero, sit amet congue erat efficitur ac. Phasellus ut dui vulputate, pretium lorem id, congue nisi. Donec non ex mattis, condimentum nibh id, dictum velit. Aliquam dignissim efficitur quam quis auctor. Fusce a lacus varius, tristique magna gravida, sagittis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur semper justo libero, vel porta turpis viverra non. Pellentesque at dolor at ex ornare ultrices sit amet in tellus. Phasellus quis aliquam turpis.</p>
        </header>
        <div className="container-searchbox">
          <img src={logo} alt="logo"/>
            <div className="categories-ctn">
              <div className="categories">
                <img src={garfo} onClick={this.onClickType} id="Restaurants" alt="garfo"/>
              </div>
              <div className="categories">
                <img src={cama} onClick={this.onClickType} id="Hotels" alt="cama"/>
              </div>
              <div className="categories">
                <img src={cinema} onClick={this.onClickType} id="Bars" alt="cinema"/>
              </div>
            </div>
        </div>
        <div className="searchctn">
          <div className="ironplaceslist"><IronplacesList type={this.state.type} /></div>
          <div className="googlemaps">GOOGLE MAPS</div>
        </div>
        <footer className="footer">
          <h1>Home > All Ironhack Campuses > Ironhack Lisbon</h1>
          <div className="footer-container">
            <div className="allrights">
              <img src={logo} alt="logo"/>
              <p>990 Biscayne Blvd. Ste 503 - Miami FL 33132 <br/> © 2013-2019 Ironhack. All Rights Reserved</p>
            </div>
            <div className="footerimg">
              <img src={creport} alt="creport"/>
              <img src={switchup} alt="switchup"/>
              <div className="floridactn">
                <p>Licensed by:</p>
                <img src={florida} alt="florida"/>
              </div>
            </div>
          </div>
        </footer>
        </React.Fragment>
    );
  }
}

export default Homepage;