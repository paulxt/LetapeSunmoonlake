import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//images
import VolunteerBannerImg1 from '../../assets/img/volunteer-banner-img1.png';
import VolunteerBannerImg2 from '../../assets/img/volunteer-banner-img2.png';
import VolunteerBannerImg3 from '../../assets/img/volunteer-banner-img3.png';
import VolunteerBannerImg4 from '../../assets/img/volunteer-banner-img4.png';


const Banner = ({language}) => {
    return (
        <section className="volunteer-banner">
            <div className="volunteer-header">
                <h1>{language === "Chinese" ? "志工招募" : "VOLUNTEERS RECRUIT" }</h1>
            </div>
            <Container>
                <Row className='align-items-center volunteer-banner-images' >
                    <Col md={3}>
                        <img className='img-odd' src={VolunteerBannerImg1} alt="" />
                    </Col>
                    <Col md={3}>
                        <img className='img-even' src={VolunteerBannerImg2} alt="" />
                    </Col>
                    <Col md={3}>
                        <img className='img-odd' src={VolunteerBannerImg3} alt="" />
                    </Col>
                    <Col md={3}>
                        <img className='img-even' src={VolunteerBannerImg4} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner