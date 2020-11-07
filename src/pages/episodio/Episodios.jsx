import React, {useEffect, useState}from 'react';
import { Button, Col, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiRick from '../../services/apiRick';

export default(props) => {

    const [episodios, setEpisodios] = useState([])
    
    useEffect(()=>{
    
        apiRick.get('episode').then(results => {
            setEpisodios(results.data.results)
        })

    }, [])
    

    return(
        <Pagina titulo="Episodios">
            <Row>
                    <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Ações</th>
                        <th>Episódio</th>
                        <th>Nome</th>
                        <th>Data que foi ao ar</th>
                      </tr>
                    </thead>
                    <tbody>
                    {episodios.map(item => (
                      <tr>
                        <td>
                            <Link to={`episodios/${item.id}`}>
                                <Button variant="primary">Detalhes</Button>{' '}
                            </Link>
                        </td>
                        <td>{item.episode}</td>
                        <td>{item.name}</td>
                        <td>{item.air_date}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
            </Row>
        </Pagina>
    )
}