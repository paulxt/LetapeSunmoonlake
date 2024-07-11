import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//images
import RouteMapImg1 from '../../assets/img/route104-map-img1.png';
import RouteMapImg2 from '../../assets/img/route104-map-img2.png';
import RouteMapImg3 from '../../assets/img/route104-map-img3.png';
import RouteMapImg4 from '../../assets/img/route104-map-img4.png';
import RouteMapImg5 from '../../assets/img/route104-map-img5.png';
import RouteMapImg6 from '../../assets/img/route104-map-img6.png';
import RouteMapImg7 from '../../assets/img/route104-map-img7.png';
import RouteMapImg8 from '../../assets/img/route104-map-img8.png';
import RouteMapImg9 from '../../assets/img/route104-map-img9.png';
import RouteMapImg10 from '../../assets/img/route104-map-img10.png';

import RouteMapImg11 from '../../assets/img/route104-map-img11.jpg';

const RouteMap = ({language}) => {
    return (
        <section className="route-map">
            <h5><span>{language === "Chinese" ? "路線地圖" : "Map"}</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Row className='align-items-center'>
                            <Col>
                                <h2>
                                    <span className='theme-color'><em>{language === "Chinese" ? "" : ""}104K</em></span>
                                </h2>
                                <p>{language === "Chinese" ? "路線長度" : "KILOMETERS"}</p>
                            </Col>
                            <Col>
                                <h2><span className='theme-color'><em>+1500m</em></span></h2>
                                <p>{language === "Chinese" ? "爬升高度" : "ELEVATION"}</p>
                            </Col>
                        </Row>
                        <Row className='align-items-center pl-5 mt-5'>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg1} alt="" />
                                    <img src={RouteMapImg2} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "起點：向山遊客中心 " : "Start Point：Xiangshan Visitor Center "}<span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg3} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "終點：向山遊客中心 " : "End Point：Xiangshan Visitor Center "}<span className='theme-color'><em>104K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg4} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "環法小鎮：向山遊客中心" : "L’ÉTAPE Village：Xiangshan Visitor Center"} <span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg5} alt="" />
                                    <img src={RouteMapImg6} alt="" />
                                    <img src={RouteMapImg7} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "登山王計時賽段一（2級坡）： " : "KOM Timed Section A（ Category 2）："}<span className='theme-color'><em>43K-52K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg5} alt="" />
                                    <img src={RouteMapImg6} alt="" />
                                    <img src={RouteMapImg8} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "登山王計時賽段二（2級坡 ：" : "KOM Timed Section B（ Category 2）："} <span className='theme-color'><em>70.5K-81.5K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg9} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "補給站：" : "Feeding Station："} <span className='theme-color'><em>32K、57.5K、69.5K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg10} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "技術服務站：" : "Technical Assistance："} <span className='theme-color'><em>32K、57.5K、69.5K</em></span></h3>
                            </div>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img src={RouteMapImg11} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RouteMap