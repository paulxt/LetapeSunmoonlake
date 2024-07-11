import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image
import YellowShirtImg1 from '../../assets/img/route104-yellowshirt1.png';
// import YellowShirtImg2 from '../../assets/img/route104-yellowshirt2.png';

import TitleIcon from '../../assets/img/title-icon.png';

const YellowShirt = ({language}) => {
    return (
        <section className="yellow-shirt">
            <Container className='my-5'>
                {language === "Chinese"? <h2><span><img className='title-icon' src={TitleIcon} alt="" /></span>獎勵辦法</h2> : <h2>HOW TO GET QUALIFIED IN L’ÉTAPE SUN MOON LAKE ?</h2>}
                <Row className='align-items-center my-1'>
                    <Col md={6}>
                        <img className='yellow-shirt1' src={YellowShirtImg1} alt="" />
                    </Col>
                    <Col md={6} className='ps-5'>
                        <h3 className='theme-color'>{language === "Chinese"? "競賽組-黃衫爭霸賽" : "104K RACE GROUP-Yellow Jersey"}<span className='theme-color top'>TOP</span></h3>
                        <h4 className='theme-color'><em>{language === "Chinese"? "限額80名" : "Limited to 80 participants"}</em></h4>
                        {language === "Chinese" ? <p>❶ 104K活動本次分為競賽組及挑戰組，兩組採複合式舉行，因交管限制，出發後所有選手不得超越領騎車輛，至放行點之後<span className='text-danger'>（約10公里處）</span>，菁英競賽正式展開。</p>
                            : <p>❶ The 104K event is divided into a Race group and a challenge group, both held in a hybrid format. Due to traffic control restrictions, all participants must not overtake the lead vehicle after departure. The race officially begins after the release point
                            <span className='text-danger'> (10 kilometers).</span></p>}
                        <p>{language === "Chinese"? "❷ 控燈交管僅提供前方競賽組集團，競賽組落後之選手與挑戰組選手，須按照交通號誌與規章行進。" : "❷ Traffic light control is provided only for the leading race group. Participants lagging behind in the race group and those in the challenge group must follow traffic signals and regulations."}</p>
                        {language === "Chinese" ? <p>❸ 欲報名競賽組選手，請填寫<a href="https://forms.gle/bQsa2nvfSr79cBXL8" target='_blank' rel='noreferrer noopener'>報名表單</a>，上傳其他賽事完賽證明、名次成績等有利事蹟，將由主辦單位聯繫並邀請專家審核，審核通過即通知您並正式成為菁英競賽組選手。</p>
                            : <p>❸ Participants wishing to register for the competition group should fill out the <a href="https://forms.gle/bQsa2nvfSr79cBXL8" target='_blank' rel='noreferrer noopener'>Registration Form</a>, upload proof of completion of other races, rankings, and other relevant achievements. The organizers will contact and invite experts for review. Once approved, you will be notified and officially become a competition group participant.</p>}
                        <p>{language === "Chinese"? "❹ 競賽組計時取總計時冠軍，計時前三名可上台獲頒獎座，前三名可額外榮獲以下獎項及代表席次：" : "❹ The race group timing will determine the overall time champion. The top three in timing can go on stage to receive trophies, and the top 3 will receive the following awards and representative right:"}</p>
                        <ul>
                            <li className='text-danger'>{language === "Chinese"? "前往法國參加2025 L’ÉTape France 錦標賽資格。" : "Qualification to participate in the 2025 L’ÉTape France Championship in France."}</li>
                            <li>{language === "Chinese"? "舞台授獎儀式" : "Award ceremony on stage."}</li>
                            <li>{language === "Chinese"? "授予環法最高榮譽黃衫（總冠軍）" : "Awarded the highest honor of the Tour de France yellow jersey. ( Champion ) "}</li>
                            <li>{language === "Chinese"? "獎座" : "Trophy."}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default YellowShirt