import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SeasonImg1 from '../../assets/img/letape-sunmoonlake-season-img1.jpg';
import SeasonImg2 from '../../assets/img/letape-sunmoonlake-season-img2.jpg';
import SeasonImg3 from '../../assets/img/letape-sunmoonlake-season-img3.jpg';
import SeasonImg4 from '../../assets/img/letape-sunmoonlake-season-img4.jpg';


const Season = () => {
    return (
        <section className="season">
            <Container>
                <h1 className='text-center'>春賞｜夏旅｜秋遊｜冬賞</h1>
                <Row className="align-items-center">
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg1} alt="" />
                            <h2>春</h2>
                            <h3>SRING</h3>
                            <p>日月潭環潭景色優美，每年2至3月櫻花盛開。規劃約50公里的潭南自行車路線，深入原住民部落，體驗文化之美，享受獨特旅程！</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg2} alt="" />
                            <h2>夏</h2>
                            <h3>SUMMER</h3>
                            <p>擁有麗緻山林風貌和獨特鐵道文化。結合鐵道與鐵馬，推出適合一般大眾的車埕-集集自行車慢騎活動，鼓勵遊客以雙輪深入體驗小鎮的古樸之美。</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg3} alt="" />
                            <h2>秋</h2>
                            <h3>AUTUMN</h3>
                            <p>秋末，結合日月潭花火音樂嘉年華，舉辦單車嘉年華。活動包括環潭挑戰、輕鬆騎乘和兒童滑步車，吸引千名國內外遊客參與，打造「白天騎車，夜賞花火音樂」的特色體驗。</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg4} alt="" />
                            <h2>冬</h2>
                            <h3>WINTER</h3>
                            <p>日月潭畔的廟宇和聖地，舉辦『騎湖．祈福』活動。文武廟、龍鳳宮、玄奘寺及耶穌堂迎接新年，鼓勵遊客騎自行車環湖，參訪廟宇祈求平安健康。</p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-tannan" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-1">
                                <h4>環潭、還南區</h4>
                                <div className="season-txtx">
                                    <p>日月潭自行車道曾被美國有線電視CNN旗下旅遊生活頻道「CNNGO」，獲選為全球十大最美自行車道，在湖光山色的景緻間騎著鐵馬，沿線品嘗部落美食、欣賞晨昏的水色美景，是來日月潭單車旅行最愜意的享受。</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-puli" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-2">
                                <h4>埔里區</h4>
                                <div className="season-txtx">
                                    <p>擁有起伏丘陵與盆地地形的埔里鎮，每一條自行車道兼具挑戰與瘦身效果，蜿蜒的山路與高難度的自行車道，沿途有著水田、山景、山谷溪流相伴，更能夠從埔里市區一路騎到日月潭，適合單車好手相伴挑戰。 </p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-che-cheng" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-3">
                                <h4>車埕、水里區</h4>
                                <div className="season-txtx">
                                    <p>水里、車埕是昔日繁榮的木業發展地帶，來到這裡騎自行車，一路有著清澈的水里溪流、集集支線鐵路相伴，不論是選擇水里水岸自行車道，或是從古樸的車埕火車站騎到水里，都是很棒選擇</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-ji-ji" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-4">
                                <h4>集集區</h4>
                                <div className="season-txtx">
                                    <p>來到著名懷舊的集集小鎮，一定不可錯過用雙輪漫遊集集綠色隧道，穿過綠意盎然的樟樹隧道，與一旁的小火車相遇，再喝杯咖啡稍作休憩，感受小鎮風光，是來集集小鎮騎自行車最特別體驗</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    ) 
}

export default Season