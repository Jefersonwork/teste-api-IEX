import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import React, { Component } from "react";

import api from "../api/api";
import Card from "./card";
import Header from "./header";
import Loading from "./loading";

import "./css/app.css";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            loading: "none",
            companyData: "",
            display: "none"
        }
    }


    refresh = async description => {
        
        try {
            const symbol = description;
            await api.get(`/${symbol}/quote`)
                .then(resp => this.setState({ ...this.state, companyData: resp.data}));
                this.setState({ ...this.state, loading: "none", display: ""});
        } catch(err) {
            alert("Simbulo não encontado \n" + err);
            this.setState({ ...this.state, loading: "none", display: "none"});
    
            return console.clear();
        }
    }

    handleSearch = () => {
        this.refresh(this.state.description);
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const { description } = this.state;
        
        if (!description.length) return alert("Insira um símbolo");

        this.setState({ ...this.state, loading: "", display: "none"});
        this.handleSearch();
    }

    handleChange = event => {
        this.setState({ ...this.state, description: event.target.value });
    }

    render() {

        const company = this.state.companyData;
        
        return (
            <div className="container">
                <Header 
                    onSubmit={ this.handleSubmit }
                    onChange={ this.handleChange }
                    value={ this.symbol }
                />

                <Loading loading = { this.state.loading } />
                <Card
                    display = { this.state.display }
                    title={ company.companyName }
                    symbol={ company.symbol } 
                    price={ company.latestPrice }
                    open = { company.open }
                    high = { company.high }
                    low = { company.low }
                />
            </div>
        )
    }
}
