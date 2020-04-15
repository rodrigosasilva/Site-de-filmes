import React, {Component} from 'react';

class Pesquisa extends Component{
    
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
            <div>
                <input className='search' placeholder='Pesquisar' value={this.state.filme.nome} onChange={(e) => 
                        this.setState({filme: e.target.value})}></input>
            </div>
        );
    }
}

export default Pesquisa;