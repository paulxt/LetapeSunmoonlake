import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image
import JerseyImg1 from '../../assets/img/about-tdf-jersey-img1.png';
import JerseyImg2 from '../../assets/img/about-tdf-jersey-img2.png';
import JerseyImg3 from '../../assets/img/about-tdf-jersey-img3.png';
import JerseyImg4 from '../../assets/img/about-tdf-jersey-img4.png';


const Jersey = ({language}) => {
    return (
        <section className="jersey">
            <Container>
                <Row className='align-items-center mb-5'>
                    <h2 className='text-center'>{language === "Chinese" ? "環法車衣象徵什麼？" : "TDF Jersey Culture"}</h2>
                    <Col md={3} sm={6} className='mt-3'>
                        <div className="jer-imgbx">
                            <img src={JerseyImg1} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Jaune</h4>
                                <h4>{language === "Chinese" ? "黃衫" : "Yellow Jersey"}</h4>
                                <p className='px-3'>{language === "Chinese" ? "黃色領騎衫，又稱為“Maillot Jaune”，是自行車比賽中最令人嚮往的獎項，授予總成績領先者。它的起源可以追溯到1919年，靈感來自於環法自行車賽的創辦報紙《L'Auto》的黃色封面。選擇這種明亮的金絲雀黃色調是為了在主車群中引人注目，同時也是對比賽起源的致敬，標誌著佩戴者正在進行跨越法國的史詩之旅中的領先。" : "The most coveted of all, the yellow jersey, or 'Maillot Jaune,' belongs to the overall race leader. Its origins date back to 1919, a colour choice inspired by the yellow paper of 'L'Auto,' the newspaper that founded the Tour de France. This bright hue of canary yellow was chosen for its standout visibility in the peloton and as a tribute to the race's origins, singling out the wearer as the frontrunner in the epic journey across France."}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg2} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot à Pois Rouges</h4>
                                <h4>{language === "Chinese" ? "紅點衫" : "Podka Jersey"}</h4>
                                <p className='px-3'>{language === "Chinese" ? "紅點衫是頂級山地自行車手的殊榮。它以白色背景為底，覆蓋著紅色圓點，象徵著在攀登賽中積分最高的山王（或山后）。這款球衣始於 1975 年，靈感來自當時主要巡迴賽的贊助商之一 —— 一家巧克力公司的包裝紙設計。它不僅突顯了最優秀的登山者，還為山地賽段增添了一抹亮色。" : "The polka dot jersey is the top mountain cycler’s prize. Covered with red dots on a white background, it's awarded to the King (or Queen) of the Mountains, the rider who accumulates the most points on classified climbs. Introduced in 1975, the jersey's design was influenced by a major sponsor of the Tour at the time, a chocolate company that packaged their products in similarly patterned wrappers. This jersey not only highlights the best climber but also dots the mountain stages."}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg3} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Vert</h4>
                                <h4>{language === "Chinese" ? "綠衫" : "Green Jersey"}</h4>
                                <p className='px-3'>{language === "Chinese" ? "自 1953 年環法自行車賽慶祝50週年以來，綠衫，即“Maillot Vert”，一直象徵著在平坦路段和衝刺中擁有最高速度和一致表現的自行車手。該獎項根據中途衝刺和每段賽程的完賽順位所積累的積分而設立。綠色這一選擇是對其最初贊助商割草機製造商的致敬，將這種顏色與速度以及短跑運動員在法國綠意盎然的景觀中展現的爆發力聯繫在一起。" : "The cyclist with the top speed and consistency across flat terrains and sprints is the wearer of the green jersey or 'Maillot Vert.' Since its inception in 1953, during the 50th anniversary of the Tour, the green jersey has been a symbol of the race's best sprinter, awarded on points earned in intermediate sprints and stage finishes. The choice of green was a nod to its original sponsor, a lawn mower manufacturer, linking the colour to speed and the sprinter's explosive energy across the green landscapes of France."}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="jer-imgbx">
                            <img src={JerseyImg4} alt="" />
                            <div className="jer-txtx">
                                <h4>Maillot Blanc</h4>
                                <h4>{language === "Chinese" ? "白衫" : ""}</h4>
                                <p className='px-3'>{language === "Chinese" ? "白色車衣或「Maillot Blanc」象徵著希望與未來潛力。這個獎項授予總級距中 25 歲以下的最優秀年輕騎手。白衫在環法早期短暫亮相後於 1975 年再次推出，其顏色象徵純潔和新鮮，彰顯了主車組中的青春活力和新興人才，標誌著這位自行車手成為未來之星。" : "The cyclist with the top speed and consistency across flat terrains and sprints is the wearer of the green jersey or 'Maillot Vert.' Since its inception in 1953, during the 50th anniversary of the Tour, the green jersey has been a symbol of the race's best sprinter, awarded on points earned in intermediate sprints and stage finishes. The choice of green was a nod to its original sponsor, a lawn mower manufacturer, linking the colour to speed and the sprinter's explosive energy across the green landscapes of France."}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Jersey