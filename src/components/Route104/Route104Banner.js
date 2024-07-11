import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Route104Banner = ({language}) => {
    return (
        <section className="route104-banner">
            <div className="route104-header mx-2 mb-5">
                {language === "Chinese" ? <h1>104K挑戰路線 <span className='theme-color ms-5'><em> The Race</em></span></h1>
                    : <h1>104K ROUTE <span className='theme-color ms-5'><em> The Race</em></span></h1>}
                
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-3'>
                        <h3 className='font-italic mx-4 my-3'><em>{language === "Chinese" ? "組別資訊" : "RULES"}</em></h3>
                        <ul>
                            <li>{language === "Chinese" ? "報名費用：NT$：4,500元" : "Registration Fee: NT$4,500"}</li>
                            <li>{language === "Chinese" ? "競賽資訊：本組別設置2個爬坡王競賽路段" : "Competition Rules: This category includes the 104K Yellow Jersey Competition and two King of the Mountain segments."}</li>
                            <li>{language === "Chinese" ? "報名資格：身心健康且具有良好、純熟單車騎乘技術及經驗，體能適應強度可以在6小時內完騎，並無條件願意踏實遵守道路交通規則與大會交通維運工作人員引導、安全騎乘者，即符合資格。" : "Eligibility: Participants must be in good physical and mental health, possess proficient and experienced cycling skills, and have the stamina to complete the ride within 6 hours. They must also unconditionally agree to strictly follow traffic regulations and adhere to guidance from event traffic and safety personnel."}</li>
                            <p className='danger'>{language === "Chinese" ? "＊104公里挑戰組限16歲以上報名，未滿16歲參加者須附監護人同意書" : "＊The 104 km Challenge Group is open to participants aged 16 and above. Those under 16 must provide a guardian consent form."}</p>
                            <li>{language === "Chinese" ? "計時方式：晶片計時" : "Timing Method: Chip Timing"}</li>
                        </ul>
                    </Col>
                    <Col md={6} className='justify-content-center px-5'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{language === "Chinese" ? "重要時程表" : "Schedule"}</th>
                                    <th>{language === "Chinese" ? "時間" : "Time"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{language === "Chinese" ? "集合時間" : "Check-in Time"}</td>
                                    <td>05:00-05:30</td>
                                </tr>
                                <tr>
                                    <td>{language === "Chinese" ? "鳴槍時間" : "Start Time"}</td>
                                    <td>06:00</td>
                                </tr>
                                <tr>
                                    <td>{language === "Chinese" ? "時間限制" : "Time Limitation"}</td>
                                    <td>{language === "Chinese" ? "6小時" : "6hrs"}</td>
                                </tr>
                                <tr>
                                    <td>{language === "Chinese" ? "衣物保管時間" : "Luggage  Storage "}</td>
                                    <td>05：00-13：30</td>
                                    </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Route104Banner