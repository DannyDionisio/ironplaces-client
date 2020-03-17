import React, { Component } from "react";
import axios from "axios";
import { link, Link } from "react-router-dom";

class IronplacesList extends Component {
    constructor() {
        super();
        this.state = { listOfIronplaces: [] };
    }

    getAllIronplaces = () => {
        axios.get(`http://localhost:5000/api/ironplaces`)
        .then(responseFromApi => {
            this.setState ({
                listOfIronplaces: responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getAllIronplaces();
    }

    render() {
        const arrayOfPlaces = this.state.listOfIronplaces.map( listOfIronplaces => {
            return (
                <div key={IronplacesList._id}>
                    <Link to={`/ironplaces/${IronplacesList._id}`}>
                        <h1>{IronplacesList.name}</h1>
                    </Link>
                </div>
            );
        });
    }

}






export default IronplacesList;