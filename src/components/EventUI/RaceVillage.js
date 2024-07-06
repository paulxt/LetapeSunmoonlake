import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';

//images
import RouteMapImg4 from '../../assets/img/route104-map-img4.png';
import RaceVillageImg1 from '../../assets/img/race-village-img1.png';
import RaceVillageImg2 from '../../assets/img/race-village-img2.png';
import RaceVillageImg3 from '../../assets/img/race-village-img3.png';

const RaceVillage = () => {
    return (
        <section className='race-village' id='race-village'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='race-village-bx'>
                        <h2><span><img className='village-icon' src={RouteMapImg4} alt="" /></span>環法小鎮</h2>
                        <h3 className='mt-5'>現場打造環法嘉年華 <br/>
                        體驗TDF氛圍！</h3>
                        <h3 className='mb-5'>Museé du Tour de France </h3>
                        <ul>
                            <li>環法歷史展示區與簽名牆</li>
                            <li>經典拍照獎台、車迷日</li>
                            <li>合作夥伴攤位互動區</li>
                        </ul>
                        <a href="https://bao-ming.com/eb/content/6179#29049" target="_blank"><button>REGISTER NOW <ArrowRightCircle size={25} /></button>   </a> 
                    </Col>
                    <Col md={6}>
                        <div className="race-village-img-bx">
                            <img className='my-1' src={RaceVillageImg1} alt="" />
                            <img className='my-1' src={RaceVillageImg2} alt="" />
                            <img className='my-1' src={RaceVillageImg3} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RaceVillage