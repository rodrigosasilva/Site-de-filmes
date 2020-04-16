import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import imgInitial from '../../img/Avengers-Endgame2.jpg';

class Home extends Component{

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
            <div className="container">
                <img className = "imgInitial" src = {imgInitial} alt = "imagem home"/>
                <div className="listaF">
                    <ul>
                        {this.state.filme.map((filme) => (
                            <li key = {filme.id}>
                                <div className = "teste">
                                    <strong>{filme.nome}</strong>
                                    <img className = "imgIcon" src={filme.foto} alt = "Filme"/>
                                    <Link to = {`/filme/${filme.id}`} >Acessar</Link>
                                </div>
                            </li>
                        ))}
                </ul>
                </div>
            </div>
        )
    }
}

export default Home;