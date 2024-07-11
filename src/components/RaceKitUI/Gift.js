import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import SignUpGift from './SignUpGift';
import FinisherGift from './FinisherGift';
import AddOnGift from './AddOnGift';

const Gift = ({language}) => {
    return (
        <section className="racekit-gift">
            <Container>
                <Row className="align-items-center my-5">
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">{language === "Chinese" ? "限定禮盒" : "Race Kit"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">{language === "Chinese" ? "完賽好禮" : "Finisher’s Gift"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">{language === "Chinese" ? "加價購商品" : "Add-on Purchase"}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className=''>
                                <Tab.Pane eventKey="first">
                                    <SignUpGift language={language} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <FinisherGift language={language} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <AddOnGift language={language} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gift