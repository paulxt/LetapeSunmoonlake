import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// video


const Banner = () => {
    return (
        <section className="about-tdf-banner">
            <div className="about-tdf-header mx-2 mb-5">
                <h1>關於環法歷史</h1>
                <h1 className='hollow'>TOUR DE FRANCE HISTORY</h1>
                <p className='text-center'>環法自行車賽（簡稱：環法）是繼世界杯和奧運會的全球第三大知名國際體育賽事品牌。<br/>
                擁有117年悠久歷史，是當今世界上級別最高、影響力最大的自行車賽事。<br />
                每年吸引全球35億電視觀眾和一千萬來自全球各地的現場觀眾觀看。</p>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <p>據說，瘋狂和天才之間的界限很清楚，在 20 世紀初的法國，任何人如果設想在全國範圍內進行近 2,500 公里長的自行車比賽，都會被廣泛認為是精神錯亂。但這並沒有阻止當時 L'Auto 雜誌的記者 Géo Lefèvre 繼續實施他的靈感計劃。他的編輯亨利·德格朗日（Henri Desgrange）大膽地相信了這個想法，並支持環法自行車賽。</p>
                    </Col>
                    <Col md={8}>
                        <iframe height="393" src="https://www.youtube.com/embed/ekIGyvfiubs?si=GV0qtIr7v37En0VL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner