import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//images
import komImg1 from '../../assets/img/route-104-kom-img1.png';
import komImg2 from '../../assets/img/route-104-kom-img2.png';

const KOM = ({language}) => {
    return (
        <section className="KOM">
            <Container>
                <Row>
                    <Col md={6} className='order-lg-2'>
                        <img className='kom-img1' src={komImg1} alt="" />
                        <img className='kom-img2' src={komImg2} alt="" />
                    </Col>
                    <Col md={6} className='order-lg-1'>
                        <h2>{language === "Chinese"? "競賽路段-登山王" : "104K RACE GROUP"}<span><em>KOM</em></span></h2>
                        <div className="kom-bx">
                            {language === "Chinese" ? <p>❶ 賽程中設置兩段登山王爬坡區段，第一段為<span className='theme-color'>43k至52k</span>，第二段為<span className='theme-color'>70.5k至81.5k</span>，兩路段分別設置分段計時，以兩段加總時間作為排名依據。</p>
                                : <p>❶ The race includes two King of the Mountain (KOM) climbing sections. The first section is from <span className='theme-color'>43k to 52k</span>, and the second section is from <span className='theme-color'>70.5k to 81.5k.</span> Each section will have separate timing, and the combined time of both sections will determine the ranking.</p>}
                            <p>{language === "Chinese"? "❷ 登山王競賽依性別分組，取男女共二位總冠軍。" : "❷ The KOM competition is divided into male and female groups, with one overall champion for each gender."}</p>
                            <p>{language === "Chinese"? "❸ 登山王冠軍可榮獲以下獎品與資格：" : "❸ The KOM champion will receive the following prizes and qualifications:"}</p>
                            <ul>
                                <li>{language === "Chinese"? "環法榮譽登山王紅點衫車衣" : "Tour de France King of the Mountain polka dot jersey."}</li>
                                <li>{language === "Chinese"? "舞台授獎儀式" : "Award ceremony on stage."}</li>
                                <li>{language === "Chinese"? "前往法國參加2025 L’ÉTape France 錦標賽資格" : "Qualification to participate in the 2025 L’ÉTape France Championship in France."}</li>
                            </ul>
                            <p className='small-text'>{language === "Chinese"? "＊主辦單位保有賽事規則最終解釋權，並保有更動活動內容之權利，若有任何關於活動的最新消息，將於活動官網更新，以上活動事項如有未盡事宜，主辦單位得隨時修訂之，恕不另行通知。" : "＊The organizers reserve the right to the final interpretation of the race rules and the right to change the event content. Any updates regarding the event will be posted on the event official website. The organizers may revise the above event details at any time without prior notice."}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default KOM