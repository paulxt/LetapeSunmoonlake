import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image 
import LetapeDataImg1 from '../../assets/img/about-letape-data-img1.png';

const Data = ({language}) => {
    return (
        <section className="about-letape-data">
            <Container>
                <Row className="align-items-center">
                    <Col size={12}>
                        <img src={LetapeDataImg1} alt="" />
                    </Col>
                </Row>
                <Row className="align-items-center px-3 py-3" >
                    <Col md={6} className="px-3 py-5" >
                        <div className="data-bx">
                            <h3>21</h3>
                            <p className='text-center'>{language === "Chinese"? "環法自行車賽L’Étape系列賽的落地站" : "The number of countries part of L’Étape by Tour de France series"}</p>
                        </div>
                    </Col>
                    <Col md={6} className="px-3 py-5" >
                        <div className="data-bx">
                            <h3>50,000</h3>
                            <p className='text-center'>{language === "Chinese"? "預計參加 2024 L’ÉTape 自行車賽的車手人數" : "The number of riders expected to participate in a L’Étape by Tour de France event in 2024"}</p>
                        </div>
                    </Col>
                    <Col md={6} className="px-3 py-5" >
                        <div className="data-bx">
                            <h3>32</h3>
                            <p className='text-center'>{language === "Chinese"? "全球32場環法自行車賽L’Étape系列賽事" : "L’Étape by Tour de France series event in 2024"}</p>
                        </div>
                    </Col>
                    <Col md={6} className="px-3 py-5" >
                        <div className="data-bx">
                            <h3>3,500</h3>
                            <p className='text-center'>{language === "Chinese"? "共騎乘全球超過3,500公里自行車路線" : "KM of stunning routes around the global"}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Data