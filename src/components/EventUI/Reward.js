import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import TitleIcon from '../../assets/img/title-icon.png';
import YellowShirt from '../Route104/YellowShirt';
import KOM from '../Route104/KOM';

const Reward = ({language}) => {
    return (
        <section className="event-reward mt-5">
            <Container>
                <Row className='align-items-center'>
                    <Col className='px-1 mb-5'>
                        <YellowShirt language={language} />
                    </Col>
                    
                </Row>
                <Row className='align-items-center'>
                    <Col className="mt-5">
                        <KOM language={language} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Reward