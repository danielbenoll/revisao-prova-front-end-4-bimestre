import React, {useEffect, useState}from 'react';
import { Button, Col, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiRick from '../../services/apiRick';

export default(props) => {

    const [episodio, setEpisodio] = useState([])
    
    useEffect(()=>{
    
        apiRick.get('episode').then(results => {
            setEpisodio(results.data)
        })

    }, [])
    
    console.log(episodio)

    return(
        <Pagina titulo="Episodios">
            <Row>
                <Col key={episodio.id} md={3}>
                    <p><strong>Episodio:</strong> {episodio.episode}</p>
                    <p><strong>Nome:</strong> {episodio.name}</p>
                    <p><strong>Data que foi ao ar:</strong> {episodio.air_date}</p>
                </Col>
            </Row>
        </Pagina>
    )
}