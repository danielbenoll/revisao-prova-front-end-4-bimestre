import React, {useEffect, useState}from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiRick from '../../services/apiRick';

export default(props) => {

    const [personagem, setPersonagem] = useState([])
    
    useEffect(()=>{
    
        const id = props.match.params.id

        apiRick.get(`character/${id}`).then(results => {
            setPersonagem(results.data)
        })

    }, [])

    return(
        <Pagina titulo={personagem?.name}>
            {personagem.id &&
                <Row>
                    <Col key={personagem.id} md={3}>
                        
                        <Image src={personagem.image} thumbnail />
                    </Col>
                    <Col>
                        <p><strong>Nome:</strong> {personagem.name}</p>
                        <p><strong>Status:</strong> {personagem.status}</p>
                        <p><strong>Espécie:</strong> {personagem.species}</p>
                        <p><strong>Gêreno:</strong> {personagem.gender}</p>
                    </Col>
                </Row>
            }
        </Pagina>
    )
}