import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons";

import VolunteerGiftImg1 from '../../assets/img/volunteer-gift-img1.png';

const Gift = () => {
    return (
        <section className="volunteer-gift">
            <Container>
                <Row className='align-items-center' >
                    <Col md={6}>
                        <div className="gift-bx">
                            <h2>成為 L’Étape 志工享有精美限定好禮！</h2>
                            <h3>JOIN US NOW !</h3>
                            <ul>
                                <li>環法挑戰賽限定工作服</li>
                                <li>獨一無二賽事體驗</li>
                                <li>其他精美禮品</li>
                                <li>志工證書</li>
                            </ul>
                            <button>REGISTER NOW <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={VolunteerGiftImg1} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gift