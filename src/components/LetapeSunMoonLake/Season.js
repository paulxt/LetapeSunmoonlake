import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SeasonImg1 from '../../assets/img/letape-sunmoonlake-season-img1.jpg';
import SeasonImg2 from '../../assets/img/letape-sunmoonlake-season-img2.jpg';
import SeasonImg3 from '../../assets/img/letape-sunmoonlake-season-img3.jpg';
import SeasonImg4 from '../../assets/img/letape-sunmoonlake-season-img4.jpg';


const Season = ({language}) => {
    return (
        <section className="season">
            <Container>
                <h1 className='text-center'>{language === "Chinese" ? "春賞｜夏旅｜秋遊｜冬賞" : "SUN MOON LAKE in Seasons"}</h1>
                <Row className="align-items-center">
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg1} alt="" />
                            <h2>春</h2>
                            <h3>SRING</h3>
                            <p>{language === "Chinese" ? "日月潭環潭景色優美，每年2至3月櫻花盛開。規劃約50公里的潭南自行車路線，深入原住民部落，體驗文化之美，享受獨特旅程！" : "Sun Moon Lake boasts stunning scenery, with cherry blossoms in full bloom from February to March each year. A planned cycling route of approximately 50 kilometers around the southern part of the lake will delve into indigenous tribal areas, offering a journey rich in cultural experiences and unique beauty!"}</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg2} alt="" />
                            <h2>夏</h2>
                            <h3>SUMMER</h3>
                            <p>{language === "Chinese" ? "擁有麗緻山林風貌和獨特鐵道文化。結合鐵道與鐵馬，推出適合一般大眾的車埕-集集自行車慢騎活動，鼓勵遊客以雙輪深入體驗小鎮的古樸之美。" : "Combining picturesque mountain forests with unique railway culture, we introduce the Chengteh (Checheng) to Jiji Cycling Slow Ride event, catering to the general public. This event encourages visitors to explore the quaint beauty of the town on two wheels, integrating both rail and bike experiences."}</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg3} alt="" />
                            <h2>秋</h2>
                            <h3>AUTUMN</h3>
                            <p>{language === "Chinese" ? "秋末，結合日月潭花火音樂嘉年華，舉辦單車嘉年華。活動包括環潭挑戰、輕鬆騎乘和兒童滑步車，吸引千名國內外遊客參與，打造「白天騎車，夜賞花火音樂」的特色體驗。" : `In late autumn, alongside the Sun Moon Lake Fireworks and Music Festival, we host a Bicycle Carnival. The event features challenges around the lake, leisurely rides, and children's scooter activities, attracting thousands of domestic and international visitors. It creates a unique experience of "daytime cycling, nighttime fireworks and music."`}</p>
                        </div>
                    </Col>
                    <Col md={3} sm={6} className="px-5 py-3">
                        <div className="season-bx">
                            <img src={SeasonImg4} alt="" />
                            <h2>冬</h2>
                            <h3>WINTER</h3>
                            <p>{language === "Chinese" ? "日月潭畔的廟宇和聖地，舉辦『騎湖．祈福』活動。文武廟、龍鳳宮、玄奘寺及耶穌堂迎接新年，鼓勵遊客騎自行車環湖，參訪廟宇祈求平安健康。" : `Organizing the "Ride the Lake, Seek Blessings" event at the temples and sacred sites around Sun Moon Lake. From Wenwu Temple and Longfeng Temple to Xuanzang Temple and Jesus Church, welcoming the New Year by encouraging visitors to cycle around the lake, visit the temples, and pray for peace and health.`}</p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-tannan" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-1">
                                <h4>{language === "Chinese" ? "環潭、還南區" : "Huantan & Tannan Areas"}</h4>
                                <div className="season-txtx">
                                    <p>{language === "Chinese" ? "日月潭自行車道曾被美國有線電視CNN旗下旅遊生活頻道「CNNGO」，獲選為全球十大最美自行車道，在湖光山色的景緻間騎著鐵馬，沿線品嘗部落美食、欣賞晨昏的水色美景，是來日月潭單車旅行最愜意的享受。" : "The Sun Moon Lake Bikeway was selected by CNN as the world’s top10 most beautiful bikeways. Biking along beautiful scenery, tasting delicious Ita Thao indigenous cuisine, enjoying beautiful sceneries from morning and evening are all great reasons for embarking on the Sun Moon Lake bike tour."}</p>
                                    <p className='theme-color mt-3'>{language === "Chinese" ? "點擊查看更多" : "More Details≫"}</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-puli" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-2">
                                {language === "Chinese" ? <h4>埔里區</h4> : <h4>Puli <br/> Area</h4>}
                                <div className="season-txtx">
                                    <p>{language === "Chinese" ? "擁有起伏丘陵與盆地地形的埔里鎮，每一條自行車道兼具挑戰與瘦身效果，蜿蜒的山路與高難度的自行車道，沿途有著水田、山景、山谷溪流相伴，更能夠從埔里市區一路騎到日月潭，適合單車好手相伴挑戰。" : "Puli Township sits in a verdant basin surrounded by rolling hills. Every bike trail offers a challenge and a good way to lose weight. Challenging mountain bike path offers great views - farmlands, mountains and valley streams - that take you directly from Puli to Sun Moon Lake. This area is great for bikers who crave a challenge with their friends."}</p>
                                    <p className='theme-color mt-3'>{language === "Chinese" ? "點擊查看更多" : "More Details≫"}</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-che-cheng" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-3">
                                <h4>{language === "Chinese" ? "車埕、水里區" : "Shuili & Checheng Areas"}</h4>
                                <div className="season-txtx">
                                    <p>{language === "Chinese" ? "水里、車埕是昔日繁榮的木業發展地帶，來到這裡騎自行車，一路有著清澈的水里溪流、集集支線鐵路相伴，不論是選擇水里水岸自行車道，或是從古樸的車埕火車站騎到水里，都是很棒選擇" : "Shuili and Checheng used to have a booming logging industry. Biking here offers views of the clear Shuili stream and nostalgic Jiji railroad and trains. Whether you depart from Shuili’s waterfront bikeway or from the rustic, quaint railroad station in Checheng, both bikeways are fantastic."}</p>
                                    <p className='theme-color mt-3'>{language === "Chinese" ? "點擊查看更多" : "More Details≫"}</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md={3} sm={6}>
                        <a href="https://www.sunmoonlake.gov.tw/zh-tw/attractions/cycling-ji-ji" target='_blank' rel='noreferrer noopener'>
                            <div className="season-bx2 season-bx2-4">
                                {language === "Chinese" ? <h4>集集區</h4> : <h4>Jiji <br/> Area</h4>}
                                <div className="season-txtx">
                                    <p>{language === "Chinese" ? "來到著名懷舊的集集小鎮，一定不可錯過用雙輪漫遊集集綠色隧道，穿過綠意盎然的樟樹隧道，與一旁的小火車相遇，再喝杯咖啡稍作休憩，感受小鎮風光，是來集集小鎮騎自行車最特別體驗" : "When you visit the famous nostalgic small town of Jiji, you must biking in the Green Tunnel. The verdant eucalyptus green tunnel is alongside the railroad where you can see the little train traversing by. Taking a coffee break to enjoy the small town scenery gives you  unique experience when biking in Jiji."}</p>
                                    <p className='theme-color mt-3'>{language === "Chinese" ? "點擊查看更多" : "More Details≫"}</p>
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