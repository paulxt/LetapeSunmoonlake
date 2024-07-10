import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import HomeDes1Img1 from '../../assets/img/home-des1-img-1.png';
import HomeDes1Img2 from '../../assets/img/home-des1-img-2.png';
import HomeDes1Img3 from '../../assets/img/home-des1-img-3.png';
import HomeDes1Img4 from '../../assets/img/home-des1-img-4.png';


const HomeDes1 = ({ language }) => {
    return (
        <section className='home-des1' id='home-des1'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        {
                            language === 'Chinese' ? (
                                    <h3><span className='theme-color'>官方環法自行車挑戰賽</span><br/>
                                        騎乘世界級絕美路線 <br/>
                                        體驗環法自行車手馳騁快感 
                                    </h3>
                                
                            ) : (
                                <h3><span className='theme-color'>L’ÉTAPE BY TOUR DE FRANCE</span></h3>
                            )
                        }
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
                                {
                                    language === "Chinese" ? <p>環法專家認證路線</p> : <p>Closed routes designed by<br/>
                                    Tour de France Experts</p>
                                }
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img2} alt="" />
                                {
                                    language === 'Chinese' ? <p>環法賽事安全規格</p> : <p>High level of<br/> safety and assistance</p>
                                }
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img3} alt="" />
                                {
                                    language === 'Chinese' ? <p>前往法國L’Étape冠軍賽榮耀</p> : <p>L’Étape du tour Championship</p>
                                }
                            </Col>
                            <Col sm={6}>
                                <img src={HomeDes1Img4} alt="" />
                                {
                                    language === 'Chinese' ? <p>環法歷史村、車迷日</p> : <p>L’Étape village & Fans day</p>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeDes1