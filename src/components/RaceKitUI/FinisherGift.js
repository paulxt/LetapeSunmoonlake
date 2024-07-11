import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


//image
import finisherGiftImg1 from '../../assets/img/finisher-gift-img1.png'
import finisherGiftImg2 from '../../assets/img/finisher-gift-img2.png'
import finisherGiftImg3 from '../../assets/img/finisher-gift-img3.png'

const FinisherGift = ({language}) => {
    return (
        <section className="finisher-gift">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg1} alt="" />
                            <h3>{language === "Chinese" ? "紀念完賽獎牌" : "Medal"}</h3>
                            <p className='px-3'>{language === "Chinese" ? "紀念獎牌設計以日月潭為靈感，梅花鹿、日月潭形狀與原住民元素，贈與每位參加者傳奇榮譽與在地化象徵紀念" : "The  medal design draws inspiration from Sun Moon Lake, featuring elements like Formosan deer, the shape of  Lake, and indigenous tribal motifs.You’ll receive a symbol of global legend and local heritage."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg2} alt="" />
                            <h3>{language === "Chinese" ? "電子證書" : "E-certification"}</h3>
                            <p className='px-3 text-center'>{language === "Chinese" ? "完賽時開放下載" : "Download available upon completion"}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg3} alt="" />
                            {language === "Chinese" ? <h3>紀念毛巾<span className="sm-text">（市價：$200元）</span></h3>
                                : <h3>Towel <span className="sm-text">（Value：NT$200）</span></h3>}
                            <p className='px-3 text-center'>{language === "Chinese" ? "打造舒適乾爽的自行車騎乘體驗" : "Creating a comfortable and dry cycling experience"}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FinisherGift