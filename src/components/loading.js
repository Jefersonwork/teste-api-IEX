import React from "react";

import img from "./img/loading.gif";
import "./css/loading.css";

export default props => (
    <div className={"col-12 col-sm-4 loading " + props.loading }>
        <img src={img} alt="laoding"/>
    </div>
)