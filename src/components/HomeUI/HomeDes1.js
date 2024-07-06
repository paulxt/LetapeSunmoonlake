import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import HomeDes1Img1 from '../../assets/img/home-des1-img-1.png';
import HomeDes1Img2 from '../../assets/img/home-des1-img-2.png';
import HomeDes1Img3 from '../../assets/img/home-des1-img-3.png';
import HomeDes1Img4 from '../../assets/img/home-des1-img-4.png';


const HomeDes1 = () => {
    return (
        <section className='home-des1' id='home-des1'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        <h3><span className='theme-color'>官方環法自行車挑戰賽</span></h3>
                        <h3>騎乘世界級絕美路線</h3>
                        <h3>體驗環法自行車手馳騁快感</h3>
                        <hr className='home-des1-line'/>
                        <h3>THE OFFICIAL TOUR DE FRANCE SPORTIVE</h3>
                        <h3>SERIES DESIGNED TO MAKE YOU FEEL LIKE</h3>
                        <h3>A <span className='theme-color'>TOUR DE FRANCE RIDER</span> IN THE MOST</h3>
                        <h3>BEAUTIFUL PLACES IN THE WORLD</h3>
                    </Col>
                    <Col md={6} className='home-des1-right-bx'>
                        <Row className='align-items-center text-center'>
                            <Col sm={6}>
                                <img src={HomeDes1Img1} alt="" />
                                <p>環法專家認證路線</p>
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img2} alt="" />
                                <p>環法賽事安全規格</p>
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img3} alt="" />
                                <p>前往法國L’ÉTape冠軍賽榮耀</p>
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img4} alt="" />
                                <p>環法歷史村、車迷日</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeDes1