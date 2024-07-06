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

const CompetitionQ = () => {
    return (
        <section className="faq-competition">
            <Container>
                <Row className='align-items-center faq-section'>
                    <h2 className='faq-header'><span><img className='faq-icon' src={FaqIcon1} alt="" /></span>競賽相關問題</h2>
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

export default CompetitionQ