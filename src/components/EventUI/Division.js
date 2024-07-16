import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import TitleIcon from '../../assets/img/title-icon.png';
//images
import DivisionImg1 from '../../assets/img/race kit.png'
import DivisionImg2 from '../../assets/img/division-104k.png';
import DivisionImg3 from '../../assets/img/division-29k.png';

import SmallTitleIcon from '../../assets/img/sm-title-icon.png';

const Division = ({language}) => {
    return (
        <section className="event-division">
            <Container>
                <h2 className='event-title'><span><img className='title-icon' src={TitleIcon} alt="" /></span>{language === "Chinese" ? "活動組別" : "Race Course"}</h2>
                <Row className='align-items-center'>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">{language === "Chinese" ? "104K 挑戰組" : "104K The Race"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">{language === "Chinese" ? "29K 經典組" : "29K The Ride"}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "報名費" : "Registration Fee"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "NT$：4,500元" : "NTD$：4,500"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "計時方式" : "Timing Method"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "晶片計時 (未收押金，不退費)" : "Chip timing"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "集合時間" : "Gathering Time"}</td>
                                                        <td className='division-table-right'>05:00-05:30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "鳴槍時間" : "Start Time"}</td>
                                                        <td className='division-table-right'>06:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "時間限制" : "Time Limit"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "6小時" : "6hrs"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "衣物保管時間" : "Luggage Storage Time"}</td>
                                                        <td className='division-table-right'>05：00-13：30</td>
                                                    </tr>
                                                    <tr>
                                                        {language === "Chinese" ? <td className='division-table-left'>選手物資環法挑戰賽限定禮盒<br />（價值：$7,820元））</td>
                                                            : <td className='division-table-left'>Race Kit L’Étape Exclusive Gift Box<br />（Value：NTD 7,820）</td>}
                                                        <td className='division-table-right'>
                                                            <ul className='ul-decimal text-start ms-5'>
                                                                <li>{language === "Chinese" ? "L’Étape 紀念車衣" : "L’Étape Jersey"}</li>
                                                                <li>{language === "Chinese" ? "自行車補給小袋" : "Bag"}</li>
                                                                <li>{language === "Chinese" ? "運動水壺" : "Water Bottle"}</li>
                                                                <li>{language === "Chinese" ? "經典自行車襪" : "Socks"}</li>
                                                                <li>{language === "Chinese" ? "Bone 蹦克單車手機綁" : "Bone Bike Tie"}</li>
                                                                <li>{language === "Chinese" ? "晶片車貼" : "Bile Number bib"}</li>
                                                                <li>{language === "Chinese" ? "紀念獎牌" : "Medal"}</li>
                                                                <li>{language === "Chinese" ? "紀念毛巾" : "Towel"}</li>
                                                                <li>{language === "Chinese" ? "電子證書" : "E-certificate"}</li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "備註" : "Note"}</td>
                                                        {language === "Chinese" ? <td className='division-table-right text-start'>※預定關門點及關門路線：詳最慢將於活動前發放的活動手冊公告。<br />※關門時間過後，後續的原活動路段的交維志工將撤哨，結束服務。</td>
                                                            : <td className='division-table-right text-start'>* Scheduled closing points and routes will be announced in the event manual distributed before the event.<br />* After the closing time, the volunteer traffic controllers on the original event route will withdraw and end their service.</td>}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <Col md={6} className='px-2'>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg1} alt="" />
                                                <a href="/race-kit"><h4><span><img src={SmallTitleIcon} alt="" /></span>{language === "Chinese" ? "點我看環法挑戰賽限定禮盒" : "Click to see race kit in details"}</h4></a>
                                            </div>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg2} alt="" />
                                                <a href="/104k-route"><h4><span><img src={SmallTitleIcon} alt="" /></span>{language === "Chinese" ? "點我看104K挑戰組路線" : "Click to see 104K The Race route"}</h4></a>
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
                                                        <td className='division-table-left'>{language === "Chinese" ? "報名費" : "Registration Fee"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "NT$：3,500元" : "NTD$：3,500"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "計時方式" : "Timing Method"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "晶片計時 (未收押金，不退費)" : "Chip timing "}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "集合時間" : "Gathering Time"}</td>
                                                        <td className='division-table-right'>05:00-05:30</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "鳴槍時間" : "Start Time"}</td>
                                                        <td className='division-table-right'>06:20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "時間限制" : "Time Limit"}</td>
                                                        <td className='division-table-right'>{language === "Chinese" ? "3小時" : "3hrs"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='division-table-left'>{language === "Chinese" ? "衣物保管時間" : "Luggage Storage Time"}</td>
                                                        <td className='division-table-right'>05：00-13：30</td>
                                                    </tr>
                                                    <tr>
                                                        {language === "Chinese" ? <td className='division-table-left'>選手物資環法挑戰賽限定禮盒<br />（價值：$7,820元））</td>
                                                            : <td className='division-table-left'>Race Kit L’Étape Exclusive Gift Box<br />（Value：NTD 7,820）</td>}
                                                        <td className='division-table-right'>
                                                            <ul className='ul-decimal text-start ms-5'>
                                                                <li>{language === "Chinese" ? "L’Étape 紀念車衣" : "L’Étape Jersey"}</li>
                                                                <li>{language === "Chinese" ? "自行車補給小袋" : "Bag"}</li>
                                                                <li>{language === "Chinese" ? "運動水壺" : "Water Bottle"}</li>
                                                                <li>{language === "Chinese" ? "經典自行車襪" : "Socks"}</li>
                                                                <li>{language === "Chinese" ? "Bone 蹦克單車手機綁" : "Bone Bike Tie"}</li>
                                                                <li>{language === "Chinese" ? "晶片車貼" : "Bile Number bib"}</li>
                                                                <li>{language === "Chinese" ? "紀念獎牌" : "Medal"}</li>
                                                                <li>{language === "Chinese" ? "紀念毛巾" : "Towel"}</li>
                                                                <li>{language === "Chinese" ? "電子證書" : "E-certificate"}</li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td className='division-table-left'>{language === "Chinese" ? "備註" : "Note"}</td>
                                                        {language === "Chinese" ? <td className='division-table-right text-start'>※預定關門點及關門路線：詳最慢將於活動前發放的活動手冊公告。<br />※關門時間過後，後續的原活動路段的交維志工將撤哨，結束服務。</td>
                                                            : <td className='division-table-right text-start'>* Scheduled closing points and routes will be announced in the event manual distributed before the event.<br />* After the closing time, the volunteer traffic controllers on the original event route will withdraw and end their service.</td>}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <Col md={6} className='px-2'>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg1} alt="" />
                                                <a href="/race-kit"><h4><span><img src={SmallTitleIcon} alt="" /></span>{language === "Chinese" ? "點我看環法挑戰賽限定禮盒" : "Click to see race kit in details"}</h4></a>
                                            </div>
                                            <div className="division-img-bx">
                                                <img src={DivisionImg3} alt="" />
                                                <a href="/29k-route"><h4><span><img src={SmallTitleIcon} alt="" /></span>{language === "Chinese" ? "點我看29K經典組路線" : "Click to see 29K The Ride route"}</h4></a>
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