import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const EventHighlight = ({language}) => {
    return (
        <section className="event-highlight">
            <Container>
                <Row className='align-items-center text-center'>
                    <Col md={4} className='event-bx event-bx1'>
                        <HashLink to={'/event-info#race-village'}>
                            {language === 'Chinese'? <h3>體驗環法嘉年華</h3> : ""}
                            <h3>Musée du Tour </h3>
                        </HashLink>
                    </Col>
                    <Col md={4} className='event-bx event-bx2'>
                        <HashLink to={'/race-kit#'}>
                            {
                                language === 'Chinese' ? (
                                    <div>
                                        <h3>報名限定</h3>
                                        <h3>紀念禮盒</h3>
                                    </div>
                                ) : (
                                        <h3>Registration Gift & Race Kit</h3>
                                )
                            }
                        </HashLink>
                    </Col>
                    <Col md={4} className='event-bx event-bx3'>
                        <HashLink to={'/letape-du-tour#'}>
                            {
                                language === 'Chinese' ? (
                                    <div>
                                        <h3>前往L’Étape</h3>
                                        <h3>2025 法國錦標賽</h3>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>2025  L’Étape du Tour </h3>
                                        <h3>Championship</h3>
                                    </div>
                                )
                            }
                        </HashLink>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EventHighlight