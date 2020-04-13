import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './estiloheader.css';

class Header extends Component{

    render(){
        return(
            <div className = "header">
                <Link to="/">
                    <h1 className = "home">Home</h1>
                </Link>
            </div>
        )
    }
}

export default Header;