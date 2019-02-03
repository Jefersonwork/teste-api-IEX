import React from "react";

import Form from "./form";
import "./css/header.css";

export default props => (
    <nav className="navbar">
        <a className="navbar-brand" href="/#">Test API IEX</a>

        <div>
            <Form 
                onSubmit={ props.onSubmit }
                value={ props.value }
                onChange={ props.onChange }
            />
        </div>
    </nav>
);