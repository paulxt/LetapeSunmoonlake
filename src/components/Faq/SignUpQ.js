import React from 'react';
import { Container, Row} from 'react-bootstrap';
import FaqCard from './FaqCard';

import TitleIcon1 from '../../assets/img/title-icon.png';

const questions = [
    {
        no: "01",
        title: "請問怎麼報名本次活動呢？",
        ans: "一律網路報名：採伊貝特線上報名。報名連結如下：https://bao-ming.com/eb/content/6179#29052",
    },
    {
        no: "02",
        title: "我報名後要如何繳費呢？有繳費期限嗎？",
        ans: "報名後可至三大超商繳費、線上刷卡，請於72小時內完成繳費，逾時未繳費系統將自動取消報名訂單。",
    },
    {
        no: "03",
        title: "報名後因為有事無法參加怎麼辦？",
        ans: "本活動採取以下三種退費方案，欲申請退費者請填寫表單：（https://forms.gle/bQsa2nvfSr79cBXL8 ）完成繳費後7日內可申請退還80%報名費用及郵寄費用自完成繳費7日後至主辦單位寄送物資期間，可申請退還60%報名費用及郵寄費用主辦單位寄出物資後，若因天災、戰爭、服兵役或各種非人為之不可抗力因素，將退還50%報名費用，其餘因素將無法受理退費，敬請見諒。",
    },
    {
        no: "04",
        title: "如果報名之後發現輸入的資料有誤，可以修改嗎？",
        ans: "未繳交報名費：可至報名系統內報名查詢，更正選手資料。已繳交報名費，恕不再進行修改，請審慎填寫報名資料。",
    },
    {
        no: "05",
        title: "若訂單顯示逾期怎麼辦?",
        ans: "可至報名系統內報名查詢，自行延長訂單。 可來電02-55915658#25專人協助。 報名截止後，恕不延長訂單。",
    },
    {
        no: "06",
        title: "若報名繳費後要再新增選手合併訂單怎麼辦?",
        ans: "請新增之選手先進行報名程序，先不繳費，並來電告知已繳費跟未繳費的訂單編號，專人會替您告知系統處理，並會再通知選手補繳差額。",
    },
    {
        no: "07",
        title: "需要開立收據如何申請？",
        ans: "請填寫申請開立收據表單（https://forms.gle/bQsa2nvfSr79cBXL8 ），統一為電子發票，將於活動結束一周後開立，並將收據寄送至您所提供的電子郵件信箱",
    },
    {
        no: "08",
        title: "怎麼申請退費呢？",
        ans: "本活動採取以下三種退費方案，欲申請退費者請填寫表單：（https://forms.gle/bQsa2nvfSr79cBXL8 完成繳費後7日內可申請退還80%報名費用及郵寄費用自完成繳費7日後至主辦單位寄送物資期間，可申請退還60%報名費用及郵寄費用主辦單位寄出物資後，若因天災、戰爭、服兵役或各種非人為之不可抗力因素，將退還50%報名費用，其餘因素將無法受理退費，敬請見諒。",
    },
]

const SignUpQ = () => {
    return (
        <section className="faq-signup">
            <Container>
                <Row className='align-items-center faq-section'>
                    <h2 className='faq-header'><span><img className='faq-icon' src={TitleIcon1} alt="" /></span>報名與繳費相關</h2>
                    {
                        questions.map(( q, index) => (
                            <FaqCard 
                                key={index}
                                {...q}
                            />
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default SignUpQ