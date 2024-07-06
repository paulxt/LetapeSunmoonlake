import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//imgae 
import TimelineImg1 from '../../assets/img/about-tdf-timeline-img1.jpg';
import TimelineImg2 from '../../assets/img/about-tdf-timeline-img2.jpg';
import TimelineImg3 from '../../assets/img/about-tdf-timeline-img3.jpg';
import TimelineImg4 from '../../assets/img/about-tdf-timeline-img4.jpg';
import TimelineImg5 from '../../assets/img/about-tdf-timeline-img5.jpg';

const Timeline = () => {
    return (
        <section className="timeline">
            <Container>
                <Row className='item item-1'>
                    <Col lg={4}>
                        <div className="media">
                            <img className='img-fluid' src={TimelineImg1} alt="" />
                        </div>
                    </Col>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                03
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={6} className='align-self-center'>
                        <div className="text">
                            <h2>環法自行車賽頂級賽事</h2>
                            <p>1903年7月1日，60名拓荒者從蒙特傑龍騎著腳踏車出發。經過6個艱巨的賽段（如南特到巴黎的471公里賽段），最終只有21名選手在莫里斯·加林（Maurice Garin）的帶領下到達了終點。加林以平均時速25公里的成績完成比賽，贏得了6075法郎的獎金，這在當時是一筆可觀的數目。但最重要的是，他成為了這項比賽的首位冠軍，開創了眾多冠軍的傳奇。</p>
                        </div>
                    </Col>
                </Row>
                <Row className='item item-2'>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                10
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={5}>
                        <div className="text">
                            <h2>Le Tour 探索高山</h2>
                            <p>在攻克了1905年的阿爾薩斯賽事後，主車群開始挑戰比利牛斯山脈的頂峰。次年，比賽前往阿爾卑斯山，攻克了加利比耶山口。</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="media">
                            <img className='img-fluid' src={TimelineImg2} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='item item-3'>
                    <Col lg={4}>
                        <div className="media">
                            <img src={TimelineImg3} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text">
                            <h2>黃衫的誕生</h2>
                            <p>第一件黃色車衣象徵總排名領先者，首次頒發給格勒諾布爾的尤金·克里斯托夫（Eugène Christophe）。黃色的選擇是為了呼應《L'Auto》雜誌的印刷紙張顏色。</p>
                        </div>
                    </Col>
                    <Col lg={1} className='offset-lg-1 timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                19
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                </Row>
                <Row className='item item-4'>
                    <Col lg={6}>
                        <div className="text">
                            <h2>國家隊</h2>
                            <p>在戴維斯盃由法國著名網球四天王統治的時代，大量的愛國情緒也因此激發。安德烈·勒杜克 (André Leducq) 成為環法自行車賽的總冠軍，而查爾斯·佩利西埃 (Charles Pélissier) 則贏得了八個賽段的勝利。這也是宣傳車隊創立的一年。</p>
                        </div>
                    </Col>
                    <Col lg={1} className='offset-lg-1 timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                30
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={4}>
                        <div className="media">
                            <img src={TimelineImg4} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <Row className='item item-5'>
                    <Col lg={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                52
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={6} className='offset-lg-1 align-self-center'>
                        <div className="text">
                            <h2>首次完成海拔高度</h2>
                            <p>本次實驗計畫在三個不同的海拔高度進行：Alpe d'Huez、Sestrières 和 Puy-de-Dôme。義大利車手福斯托·科皮 (Fausto Coppi) 率先衝過這三個終點，獲得了他的第二個環法自行車賽冠軍。</p>
                        </div>
                    </Col>
                </Row>
                <Row className='item item-2'>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                64
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col md={5} className='offset-lg-1 align-self-center'>
                        <div className="text">
                            <h2>安克蒂爾成為第一位五次贏得環法自行車賽冠軍的車手</h2>
                            <p>隨後，他將加入這個由五次環法自行車賽冠軍組成的專屬俱樂部：Eddy Merckx，被稱為“食人者”（1974年第五次獲勝）。他也是唯一一位贏得環法自行車賽所有單獨級別冠軍的車手。伯納德·伊諾（Bernard Hinault，1985年第五次獲勝），他仍然是最後一位在這項賽事中獲勝的法國人。Miguel Indurain（1995年第五次獲勝），他成為第一位連續五次贏得環法自行車賽冠軍的車手。</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <img src={TimelineImg5} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <Row className='item item-3'>
                    <Col lg={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text">
                            <h2>{`法國騎手的最後一場勝利伯納德·伊諾 (Bernard Hinault)`}</h2>
                            <p>在聖艾蒂安第14賽段結束時，伯納德·伊諾遭遇了嚴重摔倒，但他仍然成功贏得了他的第五個環法自行車賽冠軍。他至今仍是最後一位獲得冠軍的法國車手。</p>
                        </div>
                    </Col>
                    <Col lg={1} className='timeline-bx offset-lg-1'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                85
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                </Row>
                <Row className='item item-4'>
                    <Col lg={6}>
                        <div className="text">
                            <h2>{`格雷格·萊蒙德 (Greg LeMond)以 8 秒的成績贏得環法冠軍！`}</h2>
                            <p>Greg LeMond 和 Laurent Fignon 只相差 8 秒！他們將在凡爾賽到香榭麗舍大道之間的最後計時賽中一決高下。這仍然是環法自行車賽歷史上最接近的勝利優勢。</p>
                        </div>
                    </Col>
                    <Col lg={1} className='offset-lg-1 timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>19</span>
                                89
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <Row className='item item-5'>
                    <Col lg={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>20</span>
                                03
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col lg={6} className='offset-lg-1 align-self-center'>
                        <div className="text">
                            <h2>巡迴賽慶祝其一百週年</h2>
                            <p>巡迴賽慶祝了一百週年。在巴黎拉開序幕後，第一階段的開始地點與 1903 年的地點一模一樣，地點是 Montgeron 的「Le Reveil Matin」咖啡館前！</p>
                        </div>
                    </Col>
                </Row>
                <Row className='item item-2'>
                    <Col lg={1} className='timeline-bx'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>20</span>
                                13
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                    <Col md={5} className='offset-lg-1 align-self-center'>
                        <div className="text">
                            <h2>環法自行車賽慶祝其第 100 屆賽事</h2>
                            <p>環法自行車賽慶祝舉辦 100 屆。隨著Grand Départ在科西嘉島舉行，法國大都市的所有部門現在都舉辦了巡迴賽。</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <Row className='item item-3 item-end'>
                    <Col lg={4}>
                        <div className="media">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text">
                            <h2>{`塔德傑·波加查 (Tadej Pogačar) 成為自 1904 年以來最年輕的獲獎者！`}</h2>
                            <p>21 歲的斯洛維尼亞車手塔德傑·波加查（Tadej Pogačar）在首次參賽時，於2020年贏得了環法自行車賽冠軍。他成為自1904年亨利·科爾內（Henri Cornet）以來最年輕的獲獎者。</p>
                        </div>
                    </Col>
                    <Col lg={1} className='timeline-bx offset-lg-1'>
                        <div className="date">
                            <div>
                                <span className='text-stroke'>20</span>
                                20
                            </div>
                        </div>
                        <div className="verticle-line"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Timeline