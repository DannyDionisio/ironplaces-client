import React, { Component } from "react";
import axios from "axios";
import logo from "../IRONPLACES-LOGO.png";
import garfo from "../garfo.svg";
import cama from "../cama.svg";
import cinema from "../cinema.svg";
import creport from "../course-report.svg";
import switchup from "../switchup.svg";
import florida from "../florida-education.svg";
import world from "../world-map.png";

import IronplacesList from "./IronplacesList";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { type: null, listOfIronplaces: [] };
  }

  onClickType = event => {
    this.setState(
      {
        type: event.target.id
      },
      () => {
        this.getIronplaces();
      }
    );
  };

  getIronplaces = () => {
    let type = "";

    if (this.state.type) type = "type=" + this.state.type;

    axios
      .get(`https://ironplaces-server.herokuapp.com/api/places?` + type)
      .then(responseFromApi => {
        this.setState({
          listOfIronplaces: responseFromApi.data
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <header className="container-description">
          <h1>Discover Ironplaces</h1>
          <div className="conteinerhdr">
            <div className="texthdr">
              <p>
                Junta-te a Ironhack, aqui ensinamos que se acreditares em ti,
                podes alcançar o que quiseres! A nossa atitude de "Eu consigo
                fazer isto" trouxe-nos até aqui. Enfrentamos desafios constantes
                mas... Nós ajudamos a tornar a tua vida ainda mais fácil!{" "}
              </p>
              <p>
                De forma a facilitar a tua escolha pelo nosso Campus, criámos
                algumas parcerias ao qual intitulamos de Ironplaces. Para além
                de todas as opções que encontras na cidade de Lisboa onde podes
                ficar, comer e divertir. Estes são locais de eleição onde
                poderás ter descontos por pertencer a esta grande família da
                Ironhack.
              </p>
            </div>
            <img src={world} alt="World" />
          </div>
        </header>
        <div className="container-searchbox">
          <img src={logo} alt="logo" />
          <div className="categories-ctn">
            <div className="categories">
              <img
                src={garfo}
                onClick={this.onClickType}
                id="Restaurants"
                alt="garfo"
              />
            </div>
            <div className="categories">
              <img
                src={cama}
                onClick={this.onClickType}
                id="Hotels"
                alt="cama"
              />
            </div>
            <div className="categories">
              <img
                src={cinema}
                onClick={this.onClickType}
                id="Bars"
                alt="cinema"
              />
            </div>
          </div>
        </div>
        <div className="searchctn">
          <IronplacesList listOfIronplaces={this.state.listOfIronplaces} />
        </div>
        <footer className="footer">
          <h1>Home > All Ironhack Campuses > Ironhack Lisbon</h1>
          <div className="footer-container">
            <div className="allrights">
              <img height="56px" src={logo} alt="logo" />
              <p>
                990 Biscayne Blvd. Ste 503 - Miami FL 33132 <br /> © 2013-2019
                Ironhack. All Rights Reserved
              </p>
            </div>
            <div className="footerimg">
              <img src={creport} alt="creport" />
              <img src={switchup} alt="switchup" />
              <div className="floridactn">
                <p>Licensed by:</p>
                <img src={florida} alt="florida" />
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Homepage;
