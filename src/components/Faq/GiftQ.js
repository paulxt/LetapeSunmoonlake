import React from 'react';
import { Container, Row} from 'react-bootstrap';
import FaqCard from './FaqCard';

import FaqIcon1 from '../../assets/img/title-icon.png';

const questions = [
    {
        no: "01",
        title: "車衣有尺寸參考表嗎？",
        ans: "請詳見本官網 ➜「環法挑戰賽限定禮盒」；伊貝特點擊「環法挑戰賽限定禮盒」紀念車衣處連結",
    },
    {
        no: "02",
        title: "什麼時候會收到環法限定禮盒呢？",
        ans: "本活動預計於活動開始前半個月至一個月寄出環法挑戰賽限定禮盒，相關時程會公布在活動官網粉專，敬請期待。",
    },
    {
        no: "03",
        title: "什麼時候會收到加購商品呢？",
        ans: "加購商品將與您的選手物資一併寄出，預計為活動開始前半個月至一個﻿月會收到您的商品。",
    },
    {
        no: "04",
        title: "如果車衣尺寸不符合，可以更換嗎？",
        ans: "報名後尚未完成繳費者，仍可以至伊貝特後台修改尺寸資訊；若完成繳費及物資寄出後，恕無法接受更換車衣尺寸，因此請大家審慎填寫報名表。",
    },
    {
        no: "05",
        title: "如果想加購禮盒內商品可以嗎?",
        ans: "目前僅開放部分加價購商品，未來主辦單位仍在研擬更多加價購商品，將公布在官網與粉專，敬請期待。",
    },
]

const questionsEng = [
    {
        no: "01",
        title: "Does the cycling jersey have a size reference chart?",
        ans: "Please refer to our official website ➜ 'L'Étape Challenge Limited Edition Gift Box'; click on 'L'Étape Challenge Limited Edition Gift Box' link at the commemorative jersey section.",
    },
    {
        no: "02",
        title: "When will I receive the limited edition Tour de France gift box?",
        ans: "This event is expected to send out the Tour de France Challenge limited edition gift boxes half a month to a month before the event starts. The related schedule will be announced on the event's official website and social media pages. Please stay tuned.",
    },
    {
        no: "03",
        title: "When will I receive the purchased additional items?",
        ans: "Additional purchased items will be shipped together with your participant kit, and you can expect to receive your items approximately half to one month before the event starts.",
    },
    {
        no: "04",
        title: "Can I exchange the cycling jersey if the size doesn't fit?",
        ans: "Participants who have registered but have not yet completed payment can still modify their size information through the IBET backend. However, once payment is completed and merchandise has been shipped, we regret that we cannot accept requests to change jersey sizes. Therefore, we kindly ask everyone to carefully fill out the registration form.",
    },
    {
        no: "05",
        title: "Can I purchase additional items from the gift box?",
        ans: "Currently, only a few additional purchase items are available. The organizers are still planning to offer more items for additional purchase, which will be announced on the official website and social media pages. Please stay tuned.",
    },
]

const GiftQ = ({language}) => {
    return (
        <section className="faq-gift">
            <Container>
                <Row className='align-items-center faq-section'>
                    <h2 className='faq-header'><span><img className='faq-icon' src={FaqIcon1} alt="" /></span>{language === "Chinese" ? "環法限定禮盒相關問題" : "Registration Gift"}</h2>
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

export default GiftQ