import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const EventHighlight = () => {
    return (
        <section className="event-highlight">
            <Container>
                <Row className='align-items-center text-center'>
                    <Col md={4} className='event-bx event-bx1'>
                        <HashLink to={'/event-info#race-village'}>
                            <h3>體驗環法嘉年華</h3>
                            <h3>Musée du Tour </h3>
                        </HashLink>
                    </Col>
                    <Col md={4} className='event-bx event-bx2'>
                        <HashLink to={'/race-kit'} target='_blank'>
                            <h3>報名限定</h3>
                            <h3>紀念禮盒</h3>
                        </HashLink>
                    </Col>
                    <Col md={4} className='event-bx event-bx3'>
                        <HashLink to={'/letape-du-tour'} target='_blank'>
                            <h3>前往L’ÉTape</h3>
                            <h3>2025 法國錦標賽</h3>
                        </HashLink>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EventHighlight