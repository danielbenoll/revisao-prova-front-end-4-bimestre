import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cabecalho from './components/Cabecalho';
import Personagens from './pages/personagem/Personagens';
import PersonagensDetalhes from './pages/personagem/PersonagensDetalhes';
import Episodios from './pages/episodio/Episodios';
import EpisodiosDetalhes from './pages/episodio/EpisodiosDetalhes';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/personagens" component={Personagens}/>
                    <Route exact path="/personagens/:id" component={PersonagensDetalhes}/>
                    <Route exact path="/episodios" component={Episodios}/>
                    <Route exact path="/episodios/:id" component={EpisodiosDetalhes}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}