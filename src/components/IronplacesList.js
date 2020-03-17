import React, { Component } from "react";
import axios from "axios";
import { link, Link } from "react-router-dom";

class IronplacesList extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfIronplaces: [] };
    }

    getAllIronplaces = () => {
        axios.get(`https://ironplaces-server.herokuapp.com/api/places?`)
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
        return this.state.listOfIronplaces.map( listOfIronplaces => {
            return (
                <div key={listOfIronplaces._id}>
                    <Link to={`/ironplaces/${listOfIronplaces._id}`}>
                        <h1>{listOfIronplaces.name}</h1>
                    </Link>
                </div>
            );
        });
    }
}

export default IronplacesList;