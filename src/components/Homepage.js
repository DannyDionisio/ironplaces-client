import React, { Component } from 'react';
import logo from '../logo.svg';
import garfo from '../garfo.svg';
import cama from '../cama.svg';
import cinema from '../cinema.svg';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="container-description">
            <h1>Discover Heden's Area</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere metus urna, ac aliquet arcu suscipit nec. Aliquam a magna quis ipsum tristique consectetur non eu leo. Proin scelerisque diam libero, sit amet congue erat efficitur ac. Phasellus ut dui vulputate, pretium lorem id, congue nisi. Donec non ex mattis, condimentum nibh id, dictum velit. Aliquam dignissim efficitur quam quis auctor. Fusce a lacus varius, tristique magna gravida, sagittis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur semper justo libero, vel porta turpis viverra non. Pellentesque at dolor at ex ornare ultrices sit amet in tellus. Phasellus quis aliquam turpis.</p>
        </header>
        <div className="container-searchbox">
          <img src={logo} />
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search by name or address..." name="search" style={{width: '50%'}}/>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="categories-ctn">
          <div className="categories">
            <img src={garfo} />
          </div>
          <div className="categories">
            <img src={cama} />
          </div>
          <div className="categories">
            <img src={cinema} />
          </div>
        </div>
        <footer className="footer">
          <h1>Home > All Ironhack Campuses > Ironhack Lisbon</h1>
          
        </footer>
        </React.Fragment>
    );
  }
}

export default Homepage;