import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import siteMapImg from '../../assets/img/site-map-img.png';

const SiteMap = () => {
    return (
        <section className="site-map">
            <Container>
                <h2 className='event-title-5'>主會場地圖</h2>
                <Row className='align-items-center'>
                    <Col md={12}>
                        <h3><span>敬請期待</span></h3>
                        <img src={siteMapImg} alt="Site Map" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SiteMap