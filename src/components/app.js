import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import React, { Component } from "react";
import axios from "axios";

const URL = "https://api.iextrading.com/1.0/stock";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            companyData: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    refresh(description) {
        const symbol = description;
        axios.get(`${URL}/${symbol}/quote`)
            .then(resp => this.setState({ ...this.state, companyData: resp.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleSubmit = event => {
        event.preventDefault();

        const { description } = this.state;

        if (!description.length) return;
        this.handleSearch();
    }

    handleChange(event) {
        this.setState({ ...this.state, description: event.target.value });
    }

    render() {

        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input placeholder="buscar por simbulo"
                        onChange={ this.handleChange }
                        value={ this.symbol }
                    />

                    <button type="submite">
                        Buscar
                    </button>

                    <h2>{ this.state.companyData.latestPrice }</h2>
                </form>
            </div>
        )
    }
}
