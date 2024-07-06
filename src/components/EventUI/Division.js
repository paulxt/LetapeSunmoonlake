import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import TitleIcon from '../../assets/img/title-icon.png';
//images
import DivisionImg1 from '../../assets/img/race kit.png'
import DivisionImg2 from '../../assets/img/division-104k.png';
import DivisionImg3 from '../../assets/img/division-29k.png';

import SmallTitleIcon from '../../assets/img/sm-title-icon.png';

const Division = () => {
    return (
        <section className="event-division">
            <Container>
                <h2 className='event-title'><span><img className='title-icon' src={TitleIcon} alt="" /></span>活動組別</h2>
                <Row className='align-items-center'>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">104K 挑戰組</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">29K 經典組</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='division-table-left'>報名費</td>
                                                        <td className='division-table-right'>NT$：4,500元</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>計時方式</td>
                                                        <td className='division-table-right'>晶片計時 (未收押金，不退費)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>集合時間</td>
                                                        <td className='division-table-right'>05:00-05:30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>鳴槍時間</td>
                                                        <td className='division-table-right'>06:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>時間限制</td>
                                                        <td className='division-table-right'>6小時</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>衣物保管時間</td>
                                                        <td className='division-table-right'>05：00-13：30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>選手物資環法挑戰賽限定禮盒<br />（價值：$7,820元））</td>
                                                        <td className='division-table-right'>
                                                            <ul className='ul-decimal text-start ms-5'>
                                                                <li>L’Étape 紀念車衣</li>
                                                                <li>自行車補給小袋</li>
                                                                <li>運動水壺</li>
                                                                <li>經典自行車襪</li>
                                                                <li>Bone 蹦克單車手機綁</li>
                                                                <li>晶片車貼</li>
                                                                <li>紀念獎牌</li>
                                                                <li>紀念毛巾</li>
                                                                <li>電子證書</li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>備註</td>
                                                        <td className='division-table-right text-start'>※預定關門點及關門路線：詳最慢將於活動前發放的活動手冊公告。 <br/>
                                                        ※關門時間過後，後續的原活動路段的交維志工將撤哨，結束服務。</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <Col md={6} className='px-2'>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg1} alt="" />
                                                <a href="/race-kit"><h4><span><img src={SmallTitleIcon} alt="" /></span>點我看環法挑戰賽限定禮盒</h4></a>
                                            </div>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg2} alt="" />
                                                <a href="/104k-route"><h4><span><img src={SmallTitleIcon} alt="" /></span>點我看104K挑戰組路線</h4></a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='align-items-center'>
                                    <Col md={6}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='division-table-left'>報名費</td>
                                                        <td className='division-table-right'>NT$：3,500元</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>計時方式</td>
                                                        <td className='division-table-right'>晶片計時 (未收押金，不退費)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>集合時間</td>
                                                        <td className='division-table-right'>05:00-05:30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>鳴槍時間</td>
                                                        <td className='division-table-right'>06:20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>時間限制</td>
                                                        <td className='division-table-right'>3小時</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>衣物保管時間</td>
                                                        <td className='division-table-right'>05：00-13：30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>選手物資環法挑戰賽限定禮盒<br />（價值：$7,820元））</td>
                                                        <td className='division-table-right'>
                                                            <ul className='ul-decimal text-start ms-5'>
                                                                <li>L’Étape 紀念車衣</li>
                                                                <li>自行車補給小袋</li>
                                                                <li>運動水壺</li>
                                                                <li>經典自行車襪</li>
                                                                <li>Bone 蹦克單車手機綁</li>
                                                                <li>晶片車貼</li>
                                                                <li>紀念獎牌</li>
                                                                <li>紀念毛巾</li>
                                                                <li>電子證書</li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>備註</td>
                                                        <td className='division-table-right text-start'>※預定關門點及關門路線：詳最慢將於活動前發放的活動手冊公告。 <br/>
                                                        ※關門時間過後，後續的原活動路段的交維志工將撤哨，結束服務。</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <Col md={6} className='px-2'>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg1} alt="" />
                                                <a href="/race-kit"><h4><span><img src={SmallTitleIcon} alt="" /></span>點我看環法挑戰賽限定禮盒</h4></a>
                                            </div>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg3} alt="" />
                                                <a href="/29k-route"><h4><span><img src={SmallTitleIcon} alt="" /></span>點我看29K經典組路線</h4></a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Division