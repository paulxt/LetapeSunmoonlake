import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


//image
import komImg1 from '../../assets/img/route-104-kom-img1.png';
import komImg2 from '../../assets/img/route-104-kom-img2.png';

const KOM = () => {
    return (
        <section className="KOM">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>競賽路段-登山王<span><em>KOM</em></span></h2>
                        <div className="kom-bx">
                            <p>❶ 賽程中設置兩段登山王爬坡區段，第一段為<span className='theme-color'>43k至52k</span>，第二段為<span className='theme-color'>70.5k至81.5k</span>，兩路段分別設置分段計時，以兩段加總時間作為排名依據。</p>
                            <p>❷ 登山王競賽依性別分組，取男女共二位總冠軍。</p>
                            <p>❸ 登山王冠軍可榮獲以下獎品與資格：</p>
                            <ul>
                                <li>環法榮譽登山王紅點衫車衣</li>
                                <li>舞台授獎儀式</li>
                                <li>前往法國參加2025 L’ÉTape France 錦標賽資格</li>
                            </ul>
                            <p className='small-text'>＊主辦單位保有賽事規則最終解釋權，並保有更動活動內容之權利，若有任何關於活動的最新消息，將於活動官網更新，以上活動事項如有未盡事宜，主辦單位得隨時修訂之，恕不另行通知。</p>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <img className='kom-img1' src={komImg1} alt="" />
                        <img className='kom-img2' src={komImg2} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default KOM