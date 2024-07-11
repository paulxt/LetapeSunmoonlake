import React from 'react';
import { Container, Row} from 'react-bootstrap';
import FaqCard from './FaqCard';

import FaqIcon1 from '../../assets/img/title-icon.png';

const questions = [
    {
        no: "01",
        title: "如果我想報名104K競賽組，該去哪裡報名？",
        ans: "欲報名競賽組選手，請填寫報名表單（https://forms.gle/bQsa2nvfSr79cBXL8 ），上傳其他賽事完賽證明、名次成績等有利事蹟，將由主辦單位聯繫並邀請專家審核，審核通過即通知您並正式成為競賽組選手。",
    },
    {
        no: "02",
        title: "104K競賽組需要什麼樣的特定資格才可以報名？",
        ans: "建議上傳證明經歷賽事公里數為100KM以上，同時為高強度競賽類行為佳",
    },
    {
        no: "03",
        title: "只有104K總計時第一名才可以去法國比賽嗎？",
        ans: "104K計時總冠軍、登山王KOM男女總冠軍皆可獲得至法國參加錦標賽資格。",
    },
    {
        no: "04",
        title: "登山王需要額外報名嗎？",
        ans: "不用。賽程中設置兩段登山王爬坡區段，第一段為43k至52k，第二段為70.5K至81.5K，兩路段分別設置分段計時，以兩段加總時間作為排名依據。因此，任何參加者皆會會算入登山爬坡成績。",
    },
    {
        no: "05",
        title: "請問這個獎項是環法官方認證的名次嗎？",
        ans: "是的，作為環法官方系列賽，本站各項名次皆為環法官方認證成績。",
    },
]

const questionsEng = [
    {
        no: "01",
        title: "If I want to register for the 104K competitive category, where should I sign up?",
        ans: "To register for the competitive category, please fill out the registration form (https://forms.gle/bQsa2nvfSr79cBXL8) and upload other race completion certificates, rankings, or any relevant achievements. The organizing committee will contact you for expert review. Upon approval, you will be notified and officially enrolled as a competitive category participant.",
    },
    {
        no: "02",
        title: "What specific qualifications are required to register for the 104K competitive Group?",
        ans: "It is recommended to upload proof of having completed race distances of 100 kilometers or more, preferably in high-intensity competitive categories.",
    },
    {
        no: "03",
        title: "Is the trip to France only for the overall winner of the 104K race?",
        ans: "Top three in the 104K time trial, as well as the King and Queen of the Mountain (KOM) champions, will qualify to participate in the championship in France.",
    },
    {
        no: "04",
        title: "Do I need to register separately for the KOM competiton?",
        ans: "No. There are two King of the Mountain (KOM) climbing sections set during the race. The first section is from 43 km to 52 km, and the second section is from 70.5 km to 81.5 km. Both sections have timed segments, and the total time from these two sections will determine the ranking. Therefore, all participants will be included in the mountain climbing results.",
    },
    {
        no: "05",
        title: "Is this award an officially certified ranking by the Tour de France?",
        ans: "Yes, as an official event of the L'Étape Series, all rankings at this station are certified by L'Étape official standards.",
    },
]

const CompetitionQ = ({language}) => {
    return (
        <section className="faq-competition">
            <Container>
                <Row className='align-items-center faq-section'>
                    <h2 className='faq-header'><span><img className='faq-icon' src={FaqIcon1} alt="" /></span>{language === "Chinese" ? "競賽相關問題" : "Reward and Competition"}</h2>
                    {language === "Chinese" ? 
                        questions.map((q, index) => (
                            <FaqCard
                                key={index}
                                {...q}
                            />
                        ))
                    : 
                        questionsEng.map((q, index) => (
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

export default CompetitionQ