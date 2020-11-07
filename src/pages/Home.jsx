import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../components/Pagina';

export default() => {
    return(
        <Pagina titulo="Rick And Morty">
            <Link to="/personagens">
                <Button variant="danger">Personagens</Button>
            </Link>
            <Link to="/locais">
                <Button variant="primary">Locais</Button>
            </Link>
            <Link to="/episodios">
                <Button variant="success">Episodios</Button>
            </Link>
        </Pagina>
    )
}