import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image
import YellowShirtImg1 from '../../assets/img/route104-yellowshirt1.png';
// import YellowShirtImg2 from '../../assets/img/route104-yellowshirt2.png';

import TitleIcon from '../../assets/img/title-icon.png';

const YellowShirt = ({language}) => {
    return (
        <section className="yellow-shirt">
            <Container>
                <h2><span><img className='title-icon' src={TitleIcon} alt="" /></span>獎勵辦法</h2>
                <Row className='align-items-center my-5'>
                    <Col md={6}>
                        <img className='yellow-shirt1' src={YellowShirtImg1} alt="" />
                    </Col>
                    <Col md={6} className='ps-5'>
                        <h3 className='theme-color'>競賽組-黃衫爭霸賽<span className='theme-color'>TOP</span></h3>
                        <h3 className='theme-color'><em>限額80名</em></h3>
                        <p>❶ 104K活動本次分為競賽組及挑戰組，兩組採複合式舉行，因交管限制，出發後所有選手不得超越領騎車輛，至放行點之後<span className='text-danger'>（約10公里處）</span>，菁英競賽正式展開。</p>
                        <p>❷ 控燈交管僅提供前方競賽組集團，競賽組落後之選手與挑戰組選手，須按照交通號誌與規章行進。</p>
                        <p>❸ 欲報名競賽組選手，請填寫<a href="https://forms.gle/bQsa2nvfSr79cBXL8" target='_blank' rel='noreferrer noopener'>報名表單</a>，上傳其他賽事完賽證明、名次成績等有利事蹟，將由主辦單位聯繫並邀請專家審核，審核通過即通知您並正式成為菁英競賽組選手。</p>
                        <p>❹ 競賽組計時取總計時冠軍，計時前三名可上台獲頒獎座，總冠軍可額外榮獲以下獎項及代表席次：</p>
                        <ul>
                            <li className='text-danger'>前往法國參加2025 L’ÉTape France 錦標賽資格。</li>
                            <li>舞台授獎儀式</li>
                            <li>授予環法最高榮譽黃衫</li>
                            <li>獎座</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default YellowShirt