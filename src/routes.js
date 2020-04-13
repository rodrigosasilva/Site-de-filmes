import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Erro from './Pages/Erro';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/filme/:id" component = {Filme}/>
                <Route path = "*" component = {Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;