import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default(props) => {
    return(
        <>  
        {props.titulo &&
            <Jumbotron>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </Jumbotron>
        }
            <Container>
                {props.children}
            </Container>
        </>
    )
}