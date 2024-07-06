import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


//image
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

//Map
import RouteMapImg11 from '../../assets/img/route29-map-img1.jpg';

//components

const RouteMap = () => {
    return (
        <section className="route-map">
            <h5><span>路線地圖</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Row className='align-items-center'>
                            <Col>
                                <h2>
                                    <span className='theme-color'><em>29K</em></span>
                                </h2>
                                <p>路線長度</p>
                            </Col>
                            <Col>
                                <h2><span className='theme-color'><em>+650m</em></span></h2>
                                <p>爬升高度</p>
                            </Col>
                        </Row>
                        <Row className='align-items-center pl-5 mt-5'>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg1} alt="" />
                                    <img src={RouteMapImg2} alt="" />
                                </div>
                                <h3>起點：向山遊客中心 <span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg3} alt="" />
                                </div>
                                <h3>終點：向山遊客中心 <span className='theme-color'><em>104K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg4} alt="" />
                                </div>
                                <h3>環法小鎮：向山遊客中心 <span className='theme-color'><em>0K</em></span></h3>
                            </div>
                            
                            {/* <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg9} alt="" />
                                </div>
                                <h3>補給站： <span className='theme-color'><em>32K、57.5K、69.5K</em></span></h3>
                            </div>
                            <div className="route-map-bx">
                                <div className="map-logo">
                                    <img src={RouteMapImg10} alt="" />
                                </div>
                                <h3>技術服務站： <span className='theme-color'><em>32K、57.5K、69.5K</em></span></h3>
                            </div> */}
                            
                            <p className='small-text mt-5'>*本組無設置登山王競賽計時路段</p>
                            <p className='small-text'> *本組別沿途無設置補給站，建議車手可視自身情況攜帶補給品與能量飲食</p>
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