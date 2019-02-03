import React from "react";

export default props => (
    <form className="form-inline my-2 my-lg-0"
        onSubmit={ props.onSubmit }>
        <input className="form-control mr-sm-2"
            type="text" 
            value={ props.value }
            onChange={ props.onChange }
            placeholder="Buscar por símbolo"
        />
        <button  type="submit"
            className="btn btn-light my-2 my-sm-0">
            <i className="fa fa-search"></i>
        </button>
    </form>
)