import React, {useEffect, useState}from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiRick from '../../services/apiRick';

export default() => {

    const [personagens, setPersonagens] = useState([])
    
    useEffect(()=>{
    
        apiRick.get('character').then(results => {
            setPersonagens(results.data.results)
        })

    }, [])
    

    return(
        <Pagina titulo="Personagens">
            <Row>
                {personagens.map(item => (
                    <Col key={item.id} md={3}>
                        <Link to={`/personagens/${item.id}`} >
                            <Image src={item.image} thumbnail />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}