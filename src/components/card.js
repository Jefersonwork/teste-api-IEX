import React from "react";

import "./css/card.css";

export default props => (
    <div className="col-12 col-sm-4">
        <div className={"card " + props.display} >
            <div className="card-header">
                <h4>{ props.title }</h4>

                <h5 className="card-subtitle mb-2 text-muted">{ `Nasdaq: ${props.symbol}` }</h5>
                
                <h3 className="card-title">
                    { `${props.price} USD`}
                </h3>
            </div>

            <div className="card-body">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Open</th>
                            <td>{ props.open }</td>
                        </tr>

                        <tr>
                            <th>High</th>
                            <td>{ props.high }</td>
                        </tr>

                        <tr>
                            <th>Low</th>
                            <td>{ props.low }</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
)