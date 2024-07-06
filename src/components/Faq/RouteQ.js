import React from 'react';
import { Container, Row} from 'react-bootstrap';
import FaqCard from './FaqCard';

import FaqIcon1 from '../../assets/img/title-icon.png';

const questions = [
    {
        no: "01",
        title: "哪裡可以看到路線呢？",
        ans: "請詳見本官網 ➜「挑戰賽路線」；伊貝特點擊「挑戰賽路線」，即可參考不同路線的海拔圖，亦可從本官網下載GPX檔，將路線下載至手機。（下載教學請參見挑戰賽路線）",
    },
    {
        no: "02",
        title: "這些路線都是經由環法官方認證的嗎？",
        ans: "是的。本次活動104K路線與29K路線，皆為經由環法官方專家認證賽道，亦符合環法規定爬坡計算分級。",
    },
    {
        no: "03",
        title: "本次活動會全程封路且有交通管制嗎？",
        ans: "本活動採滾動式封路，104K競賽計時組將全程有專車護送。預定關門點及關門路線：詳最慢將於活動前發放的活動手冊公告。關門時間過後，後續的原活動路段的交維志工將撤哨，結束服務。",
    },
    {
        no: "04",
        title: "補給站的位置在哪？",
        ans: "104K 挑戰組：補給站：32K、57.5K、69.5K；技術服務站：32K、57.5K、69.5K。29K：沿途無設置補給站，建議車手可視自身情況攜帶補給品與能量飲食",
    },
    {
        no: "05",
        title: "選手手冊什麼時候可以下載？",
        ans: "選手手冊最慢將於活動開始前一個月公布與開放下載，敬請期待。",
    },
    {
        no: "06",
        title: "哪裡可以看到活動當天的會場配置圖?",
        ans: `主會場地圖仍在研擬中，待確認後將公告在「活動辦法」頁面。`,
    },
]


const RouteQ = () => {
    return (
        <section className="faq-route">
            <Container>
                <Row className='align-items-center faq-section'>
                    <h2 className='faq-header'><span><img className='faq-icon' src={FaqIcon1} alt="" /></span>路線與活動資訊相關問題</h2>
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

export default RouteQ