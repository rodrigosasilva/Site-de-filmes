import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './estiloheader.css';

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            filme: []
        };
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filme: json});
        })
    }

    render(){
        return(
            <div className = "header">
                <div className = "BotaoHome">
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className = "Pesquisa">
                    <input id='search' className='search' placeholder='Pesquisar' value={this.state.filme.nome} onChange={(e) => 
                        this.setState({filme: e.target.value})}></input>
                </div>
            </div>
        )
    }
}

export default Header;