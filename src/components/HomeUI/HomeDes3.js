import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeDes3 = ({language}) => {
    return (
        <section className="home-des3">
            <Container>
                <Row className='align-items-center text-center'>
                    {
                        language === 'Chinese' ? (
                            <Col size={12} md={12}>
                                <h1><span className='theme-color'>環法自行車挑戰賽首度落地日月潭</span></h1>
                                <p>全球十大最美自行車路線</p>
                            </Col>
                        ) : (
                                <Col size={12} md={12}>
                                    <h1><span className='theme-color'>L’Étape series first landing on SUN MOON LAKE</span></h1>
                                    <p>World's Top 10 Most Beautiful Cycling Routes</p>
                                </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}

export default HomeDes3