import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TitleIcon from '../../assets/img/title-icon.png';

const Traffic = ({language}) => {
    return (
        <section className="event-traffic" id="event-traffic">
            <Container>
                <h1 className='event-title'><span><img className='title-icon' src={TitleIcon} alt="" /></span>{language === "Chinese" ? "交通指南" : "Getting Here"}</h1>
                <Row className='align-items-center bg-white  mt-5 text-black '>
                    <Col md={3}>
                        <img src="" alt="" />
                        <h3>{language === "Chinese" ? "自行開車" : "DRIVING"}</h3>
                    </Col>
                    <Col md={9} className='py-5 border-start'>
                        <ul>
                            <li>
                                {language === "Chinese" ? "國道1號→南屯交流道下→縣道136線→省道臺74線→快官交流道下→國道3號→霧峰系統交流道下→國道6號→愛蘭交流道下→省道臺14線→省道臺21線。"
                                    : "National Highway 1 → Exit at Nantun Interchange → County Road 136 → Provincial Highway 74 → Exit at Guankuan Interchange → National Highway 3 → Exit at Wufong System Interchange → National Highway 6 → Exit at Ailan Interchange → Provincial Highway 14 → Provincial Highway 21."}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='align-items-center bg-white  my-5 text-black '>
                    <Col md={3}>
                        <img src="" alt="" />
                        <h3>{language === "Chinese" ? "大眾運輸" : "BUS/THSR"}</h3>
                    </Col>
                    <Col md={9} className='border-start py-5'>
                        <ul>
                            <li>{language === "Chinese" ? "搭高鐵或臺鐵至臺中站下—轉搭台灣好行6670F日月潭線至向山行政中心站下。" : "Take the High Speed Rail (HSR) or Taiwan Railways (TRA) to Taichung Station, then transfer to Taiwan Tourist Shuttle Bus 6670F Sun Moon Lake Route to Xiangshan Administration Center."}</li>
                            <li>{language === "Chinese" ? "搭臺鐵至車埕站下—轉搭台灣好行6671車埕線至向山行政中心站下。" : "Take the TRA to Checheng Station, then transfer to Taiwan Tourist Shuttle Bus 6671 Checheng Route to Xiangshan Administration Center."}</li>
                            <li>{language === "Chinese" ? "搭臺鐵至水里站下—轉搭員林／南投客運6801至向山行政中心站下。" : "Take the TRA to Shuili Station, then transfer to Yuanlin / Nantou Bus 6801 to Xiangshan Administration Center."}</li>
                        </ul>
                    </Col>
                </Row>
                {/* <Row className='align-items-center mt-5'>
                    <Col md={12}>
                        <h2 className='text-center mt-3'><span>停車資訊</span></h2>
                        <ul className='mt-5'>
                            <li>停車場：向山第一、第二停車場</li>
                            <li>大型車停車格：6、小型車停車格：99</li>
                            <li>其中含2格無障礙停車位、3格婦幼停車位、4格電動車停車位</li>
                            <li>機車停車格：46</li>
                            <li>收費方式：免費</li>
                        </ul>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}

export default Traffic