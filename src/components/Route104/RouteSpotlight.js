import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//imgae
import RouteSpotlightImg1 from '../../assets/img/route-104-spotlight-img1.jpg';
import RouteSpotlightImg2 from '../../assets/img/route-104-spotlight-img2.jpg';
import RouteSpotlightImg3 from '../../assets/img/route-104-spotlight-img3.jpg';
import RouteSpotlightImg4 from '../../assets/img/route-104-spotlight-img4.jpg';
import RouteSpotlightImg5 from '../../assets/img/route-104-spotlight-img5.jpg';
import RouteSpotlightImg6 from '../../assets/img/route-104-spotlight-img6.jpg';

const RouteSpotlight = ({language}) => {
    return (
        <section className="route-spotlight mb-5">
            <Container>
                <h2 className='mb-5'>{language === "Chinese" ? "路線特色亮點" : "Route Highlight"}</h2>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <h3>玄光寺</h3>
                        <h3><em>Xuanguang Temple</em></h3>
                        <p>{language === "Chinese" ? "玄光寺，坐落於日月潭畔，以其靜謐的禪意與壯麗的湖光山色聞名。寺前的玄奘大師銅像俯瞰湖面，風景如畫，是騎行途中放鬆心靈的絕佳景點。" : "Xuanguang Temple, situated by Sun Moon Lake, is renowned for its serene Zen ambiance and stunning lake and mountain scenery. An ideal spot for relaxation and spiritual rejuvenation during your cycling journey."}</p>
                        <img src={RouteSpotlightImg1} alt="" />
                    </Col>
                    <Col md={4}>
                        <img src={RouteSpotlightImg2} alt="" />
                        <h3 className='mt-3'>向山遊客中心</h3>
                        <h3><em>Xiangshan Visitor Center</em></h3>
                        <p>{language === "Chinese" ? "向山遊客中心位於日月潭畔，結合現代設計與自然景觀，展現獨特美感。中心內有展示區介紹日月潭的歷史與生態、多媒體互動體驗區。遊客可參觀展覽、享受咖啡館，或在觀景台俯瞰湖光山色。作為環湖自行車道起點則提供了絕佳的騎行體驗，是放鬆身心、探索自然與歷史的理想之地。" : "The Xiangshan Visitor Center, located on the shores of Sun Moon Lake, blends modern design with natural landscapes, offering a unique aesthetic appeal. Inside the center, there are exhibition areas showcasing the history and ecology of Sun Moon Lake, as well as multimedia interactive zones. Visitors can explore the exhibits, enjoy the café, or take in the panoramic views from the observation deck, overlooking the lake and mountains."}</p>
                    </Col>
                    <Col md={4}>
                        <h3>伊達邵碼頭</h3>
                        <h3><em>Ita Thao Pier</em></h3>
                        <p>{language === "Chinese" ? "位於日月潭的南岸，是體驗當地風情的絕佳景點。融合了邵族文化，提供豐富的民俗活動和美食選擇。碼頭附近的市集有各種邵族手工藝品和特色小吃，深入了解在地文化。" : "This area is an excellent spot to experience local culture. It integrates the Thao indigenous culture and offers a rich variety of folk activities and culinary delights."}</p>
                        <img src={RouteSpotlightImg3} alt="" />
                    </Col>
                    <Col md={4}>
                        <h3>埔里</h3>
                        <h3><em>Puli</em></h3>
                        <p>{language === "Chinese" ? "風光明媚、以其溫暖的氣候和豐富的自然景觀而聞名。有著名的地理中心碑、酒廠和紙教堂等景點。埔里路段的景色沿途可見綠意盎然農田、山丘與小村莊，魅力無限" : "Blessed with stunning scenery, a warm climate, and abundant natural landscapes, Puli is renowned for attractions like the Geographic Center Monument, distilleries, and the Paper Church. "}</p>
                        <img src={RouteSpotlightImg4} alt="" />
                    </Col>
                    <Col md={4}>
                        <img src={RouteSpotlightImg5} alt="" />
                        <h3 className='mt-3'>車埕</h3>
                        <h3><em>Checheng</em></h3>
                        <p>{language === "Chinese" ? "坐落於水里鄉明潭壩頂下方，曾是日治時期因大觀發電廠和木業而興盛的重要聚落，被譽為「小臺北」。如今，車埕以其豐富的歷史背景和保存完好的伐木、鐵道遺跡著稱。可以在這裡探索古老集集鐵路支線，體驗木工DIY，製作木製品如木桶便當盒，是感受台灣中部文化與工藝魅力絕佳地點。" : `Checheng was once a thriving community during the Japanese colonial era due to the Da Guan Hydroelectric Power Plant and timber industry, earning it the nickname "Little Taipei." Today, Checheng is renowned for its rich historical background and well-preserved logging and railway relics. Visitors can explore the old Jiji Railway Branch Line, engage in woodworking DIY activities such as crafting wooden bento boxes.`}</p>
                    </Col>
                    <Col md={4}>
                        <h3>水社碼頭</h3>
                        <h3><em>Shuishe Pier</em></h3>
                        <p>{language === "Chinese" ? "遊覽湖光山色不可錯過的熱門景點之一。碧綠的湖水如詩如畫，與日月潭潭區交通樞紐及商圈緊密相連，常有精彩的活動和表演。親水步道、涵碧步道則讓遊客能沿著湖邊徜徉，盡情享受湖山美景宜人詩意。" : "One of the must-visit popular attractions offering picturesque lake and mountain views is Sun Moon Lake. Its emerald-green waters are stunning, closely connected to the transportation hub and commercial district of the Sun Moon Lake area."}</p>
                        <img src={RouteSpotlightImg6} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RouteSpotlight