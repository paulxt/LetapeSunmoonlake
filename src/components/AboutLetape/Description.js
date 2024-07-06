import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons";

//image
import DesImg1 from '../../assets/img/about-letape-des-img1.jpg';

import DesImg2 from '../../assets/img/about-letape-des-img2.jpg';
import DesImg3 from '../../assets/img/about-letape-des-img3.jpg';
import DesImg4 from '../../assets/img/about-letape-des-img4.jpg';
import DesImg5 from '../../assets/img/about-letape-des-img5.jpg';



const Description = () => {
    return (
        <section className="about-letape-description">
            <Container>
                <Row className='align-items-center mt-5'>
                    <Col md={6}>
                        <img src={DesImg1} alt="" />
                    </Col>
                    <Col md={6} className='px-5 py-3'>
                        <h3>加入 L’Étape 系列賽</h3>
                        <h3>體驗環法自行車賽傳奇 !</h3>
                        <h5>EXPERIENCE THE TOUR DE FRANCE LEGEND</h5>
                        <ul>
                            <li>與環法自行車賽選手同場競技</li>
                            <li>路線由環法自行車賽專家設計</li>
                            <li>高水準的安全和援助</li>
                            <li>探索在地絕佳自行車路線</li>
                        </ul>
                        <button>REGISTER NOW ! <ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
                <Row className='align-items-center mb-5'>
                    <Col sm={6} md={3}>
                        <div className="des-bx">
                            <img src={DesImg2} alt="" />
                            <div className="des-txtx">
                                <h4>FESTIVE</h4>
                                <p>環法小鎮感受歷史文化氛圍</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="des-bx">
                            <img src={DesImg3} alt="" />
                            <div className="des-txtx">
                                <h4>CHALLENGING</h4>
                                <p>環法官方認證賽事路線規格</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="des-bx">
                            <img src={DesImg4} alt="" />
                            <div className="des-txtx">
                                <h4>IMMERSIVE</h4>
                                <p>全方位移植環法會場賽道配置</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="des-bx">
                            <img src={DesImg5} alt="" />
                            <div className="des-txtx">
                                <h4>SOCIETY</h4>
                                <p>全民共襄盛舉體驗頂級環法賽事</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Description