import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image
import JerseyImg1 from '../../assets/img/about-tdf-jersey-img1.png';
import JerseyImg2 from '../../assets/img/about-tdf-jersey-img2.png';
import JerseyImg3 from '../../assets/img/about-tdf-jersey-img3.png';
import JerseyImg4 from '../../assets/img/about-tdf-jersey-img4.png';


const Jersey = () => {
    return (
        <section className="jersey">
            <Container>
                <Row className='align-items-center mb-5'>
                    <h2 className='text-center'>環法車衣象徵什麼？</h2>
                    <Col md={3} sm={6} className='mt-3'>
                        <div className="jer-imgbx">
                            <img src={JerseyImg1} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Jaune</h4>
                                <h4>黃衫</h4>
                                <p className='px-3'>黃色領騎衫，又稱為“Maillot Jaune”，是自行車比賽中最令人嚮往的獎項，授予總成績領先者。它的起源可以追溯到1919年，靈感來自於環法自行車賽的創辦報紙《L'Auto》的黃色封面。選擇這種明亮的金絲雀黃色調是為了在主車群中引人注目，同時也是對比賽起源的致敬，標誌著佩戴者正在進行跨越法國的史詩之旅中的領先。</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg2} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot à Pois Rouges</h4>
                                <h4>紅點衫</h4>
                                <p className='px-3'>紅點衫是頂級山地自行車手的殊榮。它以白色背景為底，覆蓋著紅色圓點，象徵著在攀登賽中積分最高的山王（或山后）。這款球衣始於 1975 年，靈感來自當時主要巡迴賽的贊助商之一 —— 一家巧克力公司的包裝紙設計。它不僅突顯了最優秀的登山者，還為山地賽段增添了一抹亮色。</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg3} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Vert</h4>
                                <h4>綠衫</h4>
                                <p className='px-3'>自 1953 年環法自行車賽慶祝50週年以來，綠衫，即“Maillot Vert”，一直象徵著在平坦路段和衝刺中擁有最高速度和一致表現的自行車手。該獎項根據中途衝刺和每段賽程的完賽順位所積累的積分而設立。綠色這一選擇是對其最初贊助商割草機製造商的致敬，將這種顏色與速度以及短跑運動員在法國綠意盎然的景觀中展現的爆發力聯繫在一起。</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg4} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Blanc</h4>
                                <h4>白衫</h4>
                                <p className='px-3'>白色車衣或「Maillot Blanc」象徵著希望與未來潛力。這個獎項授予總級距中 25 歲以下的最優秀年輕騎手。白衫在環法早期短暫亮相後於 1975 年再次推出，其顏色象徵純潔和新鮮，彰顯了主車組中的青春活力和新興人才，標誌著這位自行車手成為未來之星。</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Jersey