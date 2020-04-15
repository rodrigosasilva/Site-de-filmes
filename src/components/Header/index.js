import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pesquisa from '../Pesquisa';
import './estiloheader.css';

class Header extends Component{
    
   
    render(){
        return(
            <div className = "header">
                <div className = "BotaoHome">
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className = "Pesquisa">
                    <Pesquisa/>
                </div>
            </div>
        )
    }
}

export default Header;