import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


//image
import finisherGiftImg1 from '../../assets/img/finisher-gift-img1.png'
import finisherGiftImg2 from '../../assets/img/finisher-gift-img2.png'
import finisherGiftImg3 from '../../assets/img/finisher-gift-img3.png'

const FinisherGift = () => {
    return (
        <section className="finisher-gift">
            <Container>
                <h2><span><img src="" alt="" /></span>完賽禮</h2>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg1} alt="" />
                            <h3>紀念完賽獎牌</h3>
                            <p className='px-3'>紀念獎牌設計以日月潭為靈感，梅花鹿、日月潭形狀與原住民元素，贈與每位參加者傳奇榮譽與在地化象徵紀念</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg2} alt="" />
                            <h3>電子證書</h3>
                            <p className='px-3 text-center'>完賽時開放下載</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={finisherGiftImg3} alt="" />
                            <h3>紀念毛巾<span className="sm-text">（市價：$200元）</span></h3>
                            <p className='px-3 text-center'>打造舒適乾爽的自行車騎乘體驗</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FinisherGift