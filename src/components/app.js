import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

//@renatinhadiniz

import React, { Component } from "react";

import api from "../api/api";

export default class App extends Component {
    
    state = {
        symbol: ""
    };
    
    handleSubmite = event => {
        event.preventDefault();
        
        const { symbol } = this.state;
        
        if (!symbol.length)return console.log("vazio");
        
        return console.log(symbol);
    }
    
    handleInputChange = event => {
        this.setState({ symbol: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="header-page">
                    <h2>app</h2>
                    <form onSubmit={ this.handleSubmite }>
                        <input
                            value={ this.setState.symbol }
                            onChange={ this.handleInputChange }
                            placeholder="Simbolo da ação"/>
                        <button type="submite">Buscar</button>
                    </form>
                </div>

                <div>

                </div>
            </div>
        )
    }
}