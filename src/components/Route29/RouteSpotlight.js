import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//imgae
import RouteSpotlightImg1 from '../../assets/img/route-104-spotlight-img1.jpg';
import RouteSpotlightImg2 from '../../assets/img/route-104-spotlight-img2.jpg';
import RouteSpotlightImg3 from '../../assets/img/route-104-spotlight-img3.jpg';
// import RouteSpotlightImg4 from '../../assets/img/route-104-spotlight-img4.jpg';
// import RouteSpotlightImg5 from '../../assets/img/route-104-spotlight-img5.jpg';
// import RouteSpotlightImg6 from '../../assets/img/route-104-spotlight-img6.jpg';

const RouteSpotlight = () => {
    return (
        <section className="route-spotlight mb-5">
            <Container>
                <h2 className='mb-5'>路線特色亮點</h2>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <h3>玄光寺</h3>
                        <h3><em>Xuanguang Temple</em></h3>
                        <p>玄光寺，坐落於日月潭畔，以其靜謐的禪意與壯麗的湖光山色聞名。寺前的玄奘大師銅像俯瞰湖面，風景如畫，是騎行途中放鬆心靈的絕佳景點。</p>
                        <img src={RouteSpotlightImg1} alt="" />
                    </Col>
                    <Col md={4}>
                        <img src={RouteSpotlightImg2} alt="" />
                        <h3 className='mt-3'>向山遊客中心</h3>
                        <h3><em>Xiangshan Visitor Center</em></h3>
                        <p>向山遊客中心位於日月潭畔，結合現代設計與自然景觀，展現獨特美感。中心內有展示區介紹日月潭的歷史與生態、多媒體互動體驗區。遊客可參觀展覽、享受咖啡館，或在觀景台俯瞰湖光山色。作為環湖自行車道起點則提供了絕佳的騎行體驗，是放鬆身心、探索自然與歷史的理想之地。</p>
                    </Col>
                    <Col md={4}>
                        <h3>伊達邵碼頭</h3>
                        <h3><em>Ita Thao Pier</em></h3>
                        <p>位於日月潭的南岸，是體驗當地風情的絕佳景點。融合了邵族文化，提供豐富的民俗活動和美食選擇。碼頭附近的市集有各種邵族手工藝品和特色小吃，深入了解在地文化。</p>
                        <img src={RouteSpotlightImg3} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RouteSpotlight