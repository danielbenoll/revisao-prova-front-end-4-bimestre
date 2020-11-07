import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {

    return (
        <>
            <Navbar expand="lg" bg="dark" bg="dark">
                <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/personagens">Personagens</Link>
                        <Link className="nav-link" to="/locais">Locais</Link>
                        <Link className="nav-link" to="/episodios">Episódios</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

