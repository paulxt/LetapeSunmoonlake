import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//image
import RouteMapImg1 from '../../assets/img/route104-map-img1.png';
import RouteMapImg2 from '../../assets/img/route104-map-img2.png';
import RouteMapImg3 from '../../assets/img/route104-map-img3.png';
import RouteMapImg4 from '../../assets/img/route104-map-img4.png';
//Map
import RouteMapImg11 from '../../assets/img/route29-map-img1.jpg';

const RouteMap = ({language}) => {
    return (
        <section className="route-map">
            <h5><span>{language === "Chinese" ? "路線地圖" : "Route Map"}</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Row className='align-items-center'>
                            <Col>
                                <h2>
                                    <span className='theme-color'><em>29K</em></span>
                                </h2>
                                <p>{language === "Chinese" ? "路線長度" : "KILOMETERS"}</p>
                            </Col>
                            <Col>
                                <h2><span className='theme-color'><em>+650m</em></span></h2>
                                <p>{language === "Chinese" ? "爬升高度" : "ELEVATION"}</p>
                            </Col>
                        </Row>
                        <Row className='align-items-center pl-5 mt-5'>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg1} alt="" />
                                    <img src={RouteMapImg2} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "起點：向山遊客中心" : "Start Point：Xiangshan Visitor Center"} <span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg3} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "終點：向山遊客中心" : "End Point：Xiangshan Visitor Center"} <span className='theme-color'><em>29K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg4} alt="" />
                                </div>
                                <h3>{language === "Chinese" ? "環法小鎮：向山遊客中心" : "L’ÉTAPE  Village：Xiangshan Visitor Center"} <span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            <p className='small-text mt-5'>{language === "Chinese" ? "*本組設置為純挑戰路段，鼓勵大家體驗環法騎乘樂趣氛圍！" : "* This segment is designed as a pure challenge route, encouraging everyone to experience the atmosphere of riding akin to the Tour de France!"}</p>
                            <p className='small-text'>{language === "Chinese" ? "*本組別沿途無設置補給站，建議車手可視自身情況攜帶補給品與能量飲食" : "* There are no supply stations along this segment. It is recommended that riders carry their own supplies and energy food based on their personal needs."}</p>
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