import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Distance = ({language}) => {

    return (
        <section className='distance'>
            <Container>
                {language === 'Chinese'? <h1>挑戰賽路線</h1> : <h1>EVENT ROUTE</h1>}
                <Row className='align-items-center text-center distance-bx'>
                <HashLink to={'/104k-route#'}><Col md={12} className='distance-104 text-center dist-imgbxbx'>
                        <h2 className='distance-tx'>104 KM</h2>
                    </Col></HashLink>
                </Row>
                <Row className='align-items-center text-center distance-bx'>
                    <HashLink to={'/29k-route#'}><Col md={12} className='distance-29 dist-imgbxbx'>
                        <h2>29 KM</h2>
                    </Col></HashLink>
                </Row>
            </Container>
        </section>
    )
}

export default Distance