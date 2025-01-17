import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

//images
import TitleIcon from '../../assets/img/title-icon.png';

const Precaution = ({language}) => {
    return (
        <section className="precaution my-5">
            <Container>
                <Row className='align-items-center px-2 py-2'>
                    <h2><span><img src={TitleIcon} alt="" /></span>{language === "Chinese" ? "注意事項說明" : "Notice"}</h2>
                    <Col className='precaution-bx'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{language === "Chinese" ? "一、賽前提醒及活動須知" : "1. Pre-Event Reminders and Activity Guidelines"}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {/* 1-10 */}
                                        <li>{language === "Chinese" ? "活動前一日請保持睡眠充足，以保持比賽當日身體最佳狀況。" : "Ensure get enough sleep the night before event to maintain optimal physical condition on the race day."}</li>
                                        <li>{language === "Chinese" ? "比賽當日請勿空腹運動，並請於比賽兩個小時前完成進食，避免騎行途中因血糖過低或體力不支而引發瞬間昏厥等危險情況。" : "Do not exercise on an empty stomach on the day of the race. Finish eating two hours before the race to avoid low blood sugar or fatigue during the ride, which could lead to fainting or other dangerous situations."}</li>
                                        <li>{language === "Chinese" ? "完騎成績以個人晶片車貼時間為主，請妥善保存您的晶片車貼，請勿摺疊以免損壞感應裝置，於出發前貼於自行車前緣（可參見晶片車貼使用教學）。張貼晶片車貼時請保持自行車乾燥，以避免晶片車貼於騎乘過程中脫落遺失。" : "our race result will be based on the timing chip attached to your bike. Please handle the timing chip carefully to avoid damaging the sensor. Attach the chip to the front of your bike before starting (refer to the chip usage instructions). Ensure your bike is dry when attaching the chip to prevent it from falling off during the ride."}</li>
                                        <li>{language === "Chinese" ? "本活動競賽與非競賽組別皆以安全第一為準則，務請遵守警察指揮與交通號誌，順向靠邊騎行前進；左轉路段必須依指示或兩段式左轉，切勿任意跨越三角錐或馬路中線，以確保騎乘安全。" : "Safety is the top priority in both competitive and non-competitive categories. Follow police instructions and traffic signals, ride on the right side of the road, and follow directions for left turns. Do not cross cones or road lines to ensure safety."}</li>
                                        <li>{language === "Chinese" ? "請於行前注意氣象預報，視情況自備雨具，如因天氣等不可抗力因素所迫，大會得臨時調整活動路線等內容，或將活動延期、取消等緊急因應措施。" : "Check the weather forecast before the event and bring rain gear if necessary. The organizers may adjust the route or take emergency measures such as postponing or canceling the event due to adverse weather conditions."}</li>
                                        <li>{language === "Chinese" ? "遇天災等不可抗力因素導致賽事延期或停辦時，無法參賽的選手將退還30%報名費用(不含金流系統手續費)。" : "In the event of a natural disaster or other force majeure leading to postponement or cancellation of the event, participants who cannot attend will be refunded 30% of the registration fee (excluding transaction fees)."}</li>
                                        <li>{language === "Chinese" ? "本活動大部分組別非競賽性質，計時成績及排名用以激勵自我挑戰，活動結束後供個人參考或查詢。" : "Most categories in this event are non-competitive, and the timing results are for self-motivation. Results will be available for personal reference after the event."}</li>
                                        <li>{language === "Chinese" ? "路線圖等活動須知公告於選手手冊、報名網站，活動若有未盡事宜或最新訊息時，將隨時公布於大會報名網站、官方網站或粉絲專頁。" : "Route maps and other event information will be published in the participant manual and on the registration website. Any updates or changes will be announced on the event's official website or social media pages."}</li>
                                        <li className='text-danger'>{language === "Chinese" ? "請自備單車、安全帽、車燈（因當日出發時間較早，天色仍昏暗，為了您的安全，本單位提醒您攜帶車燈維護騎行安全）、自行車水壺，大會將提供補充用的箱水，盡量避免使用寶特瓶飲料，以免脫落造成自身及他人危險。" : "Bring your own bike, helmet, bike light, and water bottle. The organizers will provide refillable water stations. Avoid using plastic bottles to prevent littering, which could endanger yourself and others."}</li>
                                        <li>{language === "Chinese" ? "未報名參加本活動者，嚴禁代騎、陪騎等行為，若發生任何意外其後果須自行負責。" : "Participants not registered for the event are strictly prohibited from riding or accompanying registered participants. Any accidents resulting from such behavior will be the responsibility of the individuals involved."}</li>
                                        {/* 11-20 */}
                                        <li>{language === "Chinese" ? "以上公告主辦方有修正之權利，最後以大會公告為準，敬請密切注意官方網站。104公里挑戰組、29公里經典組均採用「晶片計時」，「大會成績」為鳴槍起始時間。所有獎勵成績一律以「大會時間」為主。" : "The organizers reserve the right to amend the event rules. The final decision will be based on the official announcement. Timing chips will be used for the 104km challenge and 29km classic categories, with official results based on gun time. All awards will be based on official time."}</li>
                                        <li>{language === "Chinese" ? "未能依時限完成者，將由裁判人員勸離直接折返，選手不得異議。" : "Participants unable to finish within the time limit will be asked to withdraw and return directly; no objections will be accepted."}</li>
                                        <li>{language === "Chinese" ? "衣物保管：2024年11月30日 上午05:00~13:30，僅提供封口寄袋服務，每人一袋為限，為確保產物安全，請使用有封口之寄物袋；不接受大量零散物品，請務必自行集中裝袋，寄物區規畫為方便參賽者及服務性質，貴重物品請隨身攜帶，寄放物品如有遺失，大會不負保管與賠償責任。" : "Baggage Storage: Available from 05:00 to 13:30 on November 30, 2024. Each participant is limited to one sealed bag. To ensure safety, use sealed bags only; loose items will not be accepted. The storage area is for convenience; valuable items should be kept with you. The organizers are not responsible for lost items."}</li>
                                        <li>{language === "Chinese" ? "安全第一，身體不適者請立即停止競賽，並請隨身攜帶健保卡或相關證明文件。" : "Safety first. If you feel unwell, stop the race immediately and carry your health insurance card or relevant documents."}</li>
                                        <li>{language === "Chinese" ? "活動全程請服從工作人員之指示進行比賽，並詳讀交通指示規程。" : "Follow staff instructions throughout the event and read the traffic regulations."}</li>
                                        <li>{language === "Chinese" ? "如物資有缺少或有問題，請於11/08（一）前，致02-5591-5658分機25洽詢,服務時間：週一至週五AM10:00～PM18:00，逾時視同棄權論。" : "If you have any issues with the event materials, contact 02-5591-5658 ext. 25 by November 8. Service hours: Monday to Friday, 10:00 AM - 6:00 PM. Issues reported after this date will be considered forfeited."}</li>
                                        <li>{language === "Chinese" ? "凡完成報名因故無法報到參賽者，可憑選手編號，於賽後一星期(12/02-12/06)內至名衍行銷(台北市大安區溫州街48巷14號1樓)領取紀念品（逾時視同棄權論）。服務時間：週一至週五AM10:00～PM18:00，逾時視同棄權論。" : "Participants who cannot attend the event after registration can collect their souvenir within a week after the event (December 2-6) at Ming Yan Marketing Co., Ltd. (1F, No. 14, Lane 48, Wenzhou Street, Da’an District, Taipei City). Service hours: Monday to Friday, 10:00 AM - 6:00 PM. Late collection will be considered forfeited."}</li>
                                        <li>{language === "Chinese" ? "如遇人力不可抗力之天災或天候不佳等因素，大會將視情形決定取消或擇期比賽或改用其他替代路線，選手不得異議。並將於活動前1日公告於活動官網，恕不另行通知。" : "In case of natural disasters or adverse weather conditions, the organizers may cancel, reschedule, or change the route as necessary. Participants cannot object. Announcements will be made on the event website the day before the event."}</li>
                                        <li>{language === "Chinese" ? "本活動之錄影、相片及成績等，為主辦單位版權所有。" : "All recordings, photos, and results of the event are the property of the organizers."}</li>
                                        <li>{language === "Chinese" ? "主辦單位保有更動活動內容之權利，若有任何關於活動的最新消息，將於活動官網更新，以上活動事項如有未盡事宜，主辦單位得隨時修訂之，恕不另行通知。" : "The organizers reserve the right to change event content. Any updates will be posted on the event website. The organizers may amend these rules as needed without prior notice."}</li>
                                    </ul>
                                    <h4>{language === "Chinese" ? "1. 處罰規則" : "Penalty Rules"}</h4>
                                        <ul>
                                            <li>{language === "Chinese" ? "凡違反以下規定者，以取消比賽成績處理之。" : "Anyone who violates the following regulations will have their race results canceled."}</li>
                                            <li>{language === "Chinese" ? "競賽路段進行中選手借助他人之幫助而獲利者（如乘車、扶持……等）。" : "Gaining an advantage during the competition segment by receiving assistance from others (e.g., riding in a vehicle, being supported, etc.)."}</li>
                                            <li>{language === "Chinese" ? "報名組別與身分證明資格不符者。" : "Mismatched registration category and identification qualifications."}</li>
                                            <li>{language === "Chinese" ? "違反運動精神和道德（如打架、辱罵裁判……）。" : "Violating sportsmanship and ethics (e.g., fighting, insulting referees, etc.)."}</li>
                                            <li>{language === "Chinese" ? "無配戴晶片帽貼號碼布者。" : "Not wearing the chip, helmet sticker, or number bib."}</li>
                                        </ul>
                                    <h4>{language === "Chinese" ? "2. 申訴" : " Appeals"}</h4>
                                    <ul>
                                        <li>{language === "Chinese" ? "應由單位領隊或教練，於賽後 30 分鐘內，以書面向大會審判委員會正式提 出申訴，同時繳交保證金新臺幣參仟元整，賽會將以審判委員會之判決為終 決。提出申訴不成時沒收其保證金。" : "* Appeals must be submitted in writing by the team leader or coach to the event's judging committee within 30 minutes after the race. A deposit of 3,000 NTD must be paid. The decision of the judging committee is final. If the appeal is unsuccessful, the deposit will be forfeited."}</li>
                                        <li>{language === "Chinese" ? "如未經上述程序提出申訴，以致干擾比賽進行，將由裁判團採取適當處分， 以維競賽之進行。" : "* If the appeal is not submitted through the proper procedure and interferes with the progress of the race, the referee team will take appropriate action to ensure the race continues."}</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{language === "Chinese" ? "二、保險說明" : "2. Insurance"}</Accordion.Header>
                                <Accordion.Body>
                                    {language === "Chinese" ? <p>各位親愛的車友，這裡有個小溫馨提醒～參加任何活動應以自身安全為第一優先考量，本活動只會對現場發生之狀況進行緊急醫療照護並視情況協助送醫處理，若車友本身具有疾患引起之病症不在承保範圍內，提醒車友要注意自身身體狀況，若有任何不適請勿逞強，應馬上停止騎行活動。另外，本活動僅投保公共意外險，若車友仍須旅遊平安險可自行投保，感謝各位的配合。</p>
                                        : <p>Dear Riders, <br/>
                                        Here's a friendly reminder for everyone: When participating in any event, your safety should always be the top priority. This event will only provide emergency medical care for incidents that occur on-site and assist with hospitalization if necessary. Please be aware that symptoms arising from pre-existing conditions are not covered under our insurance. Take care of your health, and if you feel unwell, do not push yourself and stop riding immediately. Additionally, only public liability insurance is provided for this event. If you require travel insurance, please arrange it yourself. Thank you for your cooperation.</p>}
                                    
                                    <p>{language === "Chinese" ? "本活動公共意外險承保範圍：" : "Coverage of Public Liability Insurance for This Event:"}</p>
                                    <ul>
                                        <li>{language === "Chinese" ? "被保險人或其受僱人於保險期間內，因在本保險契約所載活動處所舉辦活動而發生意外事故，致第三人髓傷或財物損失，依法應由被保險人負賠償責任，而受賠償請求時，本公司對被保人負賠償之責。" : "The insured or their employees are covered for accidents occurring during the insured period at the event venue listed in the insurance contract, which cause bodily injury or property damage to third parties, for which the insured is legally liable. The insurance company will cover compensation claims made against the insured."}</li>
                                    </ul>
                                    <p>{language === "Chinese" ? "本保險契約用詞定義如下：" : "Definitions in the Insurance Contract:"}</p>
                                    <ul>
                                        <li>{language === "Chinese" ? "活動期間：係指活動場次列表所列期間；無活動場次列表者，即保險契約所載之保險期間。" : "Event Period: Refers to the period listed in the event schedule; if there is no event schedule, it refers to the insurance period specified in the insurance contract."}</li>
                                        <li>{language === "Chinese" ? "活動：係指由被保險人主辦或協辦，經本公司同意承係並載明於本保險契約之活動。" : "Event: Refers to the activities organized or co-organized by the insured, as agreed and specified in the insurance contract."}</li>
                                        <li>{language === "Chinese" ? "活動處所：係指經本公司同意承係並載明於本保險契约之活動處所。" : "Event Venue: Refers to the venue agreed and specified in the insurance contract."}</li>
                                    </ul>
                                    <p>{language === "Chinese" ? "特別不保事項：" : "Exclusions: In addition to the exclusions mentioned in the common clauses Article 4 (Exclusion A) and Article 5 (Exclusion B), this insurance contract also excludes compensation for the following:"}</p>
                                    <ul>
                                        {/* 1-10 */}
                                        <li>{language === "Chinese" ? "本保險契約除共同條款第四條除外責任（一）、第五條除外責任（二）外，本活動對下列賠償責任，亦不負賠償之責：" : "In addition to the exclusions mentioned in the common clauses Article 4 (Exclusion A) and Article 5 (Exclusion B), this insurance contract also excludes compensation for the following:"}</li>
                                        <li>{language === "Chinese" ? "第三人因疾病所致之體傷或死亡。" : "Bodily injury or death caused by diseases."}</li>
                                        <li>{language === "Chinese" ? "第三人從事或唆使犯罪或逃避合法逮捕或根互門毆。" : "Injuries or deaths resulting from criminal acts, evasion of legal arrest, or personal fights."}</li>
                                        <li>{language === "Chinese" ? "第三人酒後（其吐氣或血液所含酒積成份超過道路交通法令規定標準者）駡（騎）車或施打禁藥後之行為。" : "Actions performed under the influence of alcohol (exceeding legal limits) or drugs."}</li>
                                        <li>{language === "Chinese" ? "因戰爭、類似戰爭（不論宣戰與否）、外敵入侵、外敵行為丶內戰、叛亂丶革命、軍事反叛行為或恐怖主義行為所致者。階諝恐怖主義行為，係挂任何個人或團體，不論單獨或與任何紐織丶圍體或政府機構共謀，運用武力丶暴力、恐嚇丶威脅或破壞等行為，以遂其政治、宗教、信仰、意識型態或其他類似意圖之目的，包扭企圖推翻、脅迫或影帯任何政府，或致使民眾或特定群眾處於恐懼狀態。" : "War, war-like acts (whether declared or not), foreign invasion, civil war, rebellion, revolution, military actions, or acts of terrorism."}</li>
                                        <li>{language === "Chinese" ? "因核子分裂或輻射作用所致者。" : "Nuclear fission or radiation effects."}</li>
                                        <li>{language === "Chinese" ? "因罷工、暴動、民眾騷擾所致者。" : "Strikes, riots, or civil disturbances."}</li>
                                        <li>{language === "Chinese" ? "因颱風、暴風、龍捲風、洪水、閃電丶雷擊、地震丶火山爆發、海嘯、土崩、岩崩丶土石流、地陷等天然災變所致者。" : "Natural disasters such as typhoons, storms, tornadoes, floods, lightning, earthquakes, volcanic eruptions, tsunamis, landslides, and mudslides."}</li>
                                        <li>{language === "Chinese" ? "因要保人或被保險人之故意行為所致者。" : "Intentional acts by the policyholder or insured."}</li>
                                        <li>{language === "Chinese" ? "因被保險人經營或兼營非本保險契约所載明之業務或執行未、徑主伶機關許可之業務或從事非法行為所致者。" : "Activities not specified in the insurance contract or carried out without official approval."}</li>
                                        {/* 11-20 */}
                                        <li>{language === "Chinese" ? "各種形態之污染與石綿所致者。" : "Pollution and asbestos-related claims."}</li>
                                        <li>{language === "Chinese" ? "任何性質之附帶損失。" : "Consequential losses of any kind."}</li>
                                        <li>{language === "Chinese" ? "前述所稱附帶損失，係指危險事故直接致財産損失之結果所造成之間接損失。" : "Fines, penalties, liquidated damages, or punitive damages."}</li>
                                        <li>{language === "Chinese" ? "任何罰金、罰鍰、違約金或懲罰性陪償金。" : "Contractual or agreement-based liabilities unless legally required without the contract."}</li>
                                        <li>{language === "Chinese" ? "被保險人以契約或協議所承受之賠償責任。但縦無該項契約或協議存在時仍應由被保險人負賠償責任者，不在此限。" : "Damage to property rented, borrowed, or controlled by the insured."}</li>
                                        <li>{language === "Chinese" ? "被保險人向人租借、代人保管、管理或控制之財物，受有損失之賠償責任。" : "Professional liability arising from specialized occupations or managerial roles."}</li>
                                        <li>{language === "Chinese" ? "被保險人或其受僱人因執行專門職業及技衙人員考試法旄行紐則第二條所稱之專門職業及技衙人員之專門職業或擔任法人、俱樂部、協會等組織之董事、監察人、負責人、經理人、高级管理人員或法務主管之董、監事職務所發生之賠償責任。" : "Liabilities occurring outside the jurisdiction of Taiwan."}</li>
                                        <li>{language === "Chinese" ? "於中華民國臺灣地區（含金門、馬祖及政府統治權所及之其他地區，以下簡稱中華民國臺灣地區）以外所發生之賠償責任。" : "Product liability for goods sold or supplied by the insured."}</li>
                                        <li>{language === "Chinese" ? "被保險人或其受僱人或其代理人因售出或供應之商品或貨物祈發生之賭償責任。" : "Liabilities from construction-related vibrations or weak support structures causing damage."}</li>
                                        <li>{language === "Chinese" ? "被係險人在經營業務或舉辦活動時，於營索或活動處所內，在施工期間因施工發生之震動或支撐設施薄弱或移動，致第三人之建第物丶土地或財物遭受毀損滅失之賠償責任。" : "Injuries or deaths of family members or employees of the insured."}</li>
                                        {/* 21-30 */}
                                        <li>{language === "Chinese" ? "被保險人之家屬或在執行職務之受僱人發生體傷、死亡或其財物受有損審之賠償責任。" : "Liability from the ownership or use of elevators, escalators, or lifts."}</li>
                                        <li>{language === "Chinese" ? "被保險人因所有、使用或管理電梯（包括電扶梯、升降機）所致第三人體傷、死亡或第三人財物毀損滅失之賠償責任。" : "Incidents within residential units managed by the insured."}</li>
                                        <li>{language === "Chinese" ? "被保險人為住宅大樓管理單位時，於住戶或承祖戶住、居斫室內發生意外事故所致髏傷丶死亡或財物受有損失。" : "Swimming pool-related liabilities."}</li>
                                        <li>{language === "Chinese" ? "被保險人因所有、使用或管理游泳池所致第三人體傷、死亡或第三人財物毀損滅失之賠償責任。" : "Contractors’ or subcontractors’ injuries or deaths."}</li>
                                        <li>{language === "Chinese" ? "被保險人之承包人或轉包人及該承包人或轉包人在執行職務之受僱人體傷或死亡。" : "Liabilities as per the Labor Standards Law."}</li>
                                        <li>{language === "Chinese" ? "被保險人依勞動基準法規定之賠償責任。" : "Please ensure that you understand the extent of the insurance coverage and exclusions. Take the necessary precautions for your safety during the event."}</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{language === "Chinese" ? "三、報到方式" : "3. Check in and Race Kit"}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>{language === "Chinese" ? "一律採取郵寄報到，活動當天恕不受理報到手續。" : "Registration will be handled via mail only; on-site registration on the event day is not accepted."}</li>
                                        <li>{language === "Chinese" ? "郵資計算方式如下，郵寄報到費用請於報名時同時繳交。" : "The postal fee is calculated as follows, and the mailing registration fee must be paid at the time of registration."}</li>
                                    </ul>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th colspan="9">{language === "Chinese" ? "郵寄報名費用表" : "Registration Delivery Fee"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{language === "Chinese" ? "人數" : "Number of People"}</td>
                                                <td>{language === "Chinese" ? "1-2人" : "1-2"}</td>
                                                <td>{language === "Chinese" ? "3-5人" : "3-5"}</td>
                                                <td>{language === "Chinese" ? "6-20人" : "6-20"}</td>
                                                <td>{language === "Chinese" ? "21-50人" : "21-50"}</td>
                                                <td>{language === "Chinese" ? "51-100人" : "51-100"}</td>
                                                <td>{language === "Chinese" ? "101-200人" : "101-200"}</td>
                                                <td>{language === "Chinese" ? "201-300人" : "201-300"}</td>
                                                <td>{language === "Chinese" ? "301人以上" : "300+"}</td>
                                            </tr>
                                            <tr>
                                                <td>{language === "Chinese" ? "郵寄費用" : "Postal Fee($NTD)"}</td>
                                                <td>{language === "Chinese" ? "120元" : "120"}</td>
                                                <td>{language === "Chinese" ? "300元" : "300"}</td>
                                                <td>{language === "Chinese" ? "600元" : "600"}</td>
                                                <td>{language === "Chinese" ? "800元" : "800"}</td>
                                                <td>{language === "Chinese" ? "1,500元" : "1,500"}</td>
                                                <td>{language === "Chinese" ? "2,000元" : "2,000"}</td>
                                                <td>{language === "Chinese" ? "2,500元" : "2,500"}</td>
                                                <td>{language === "Chinese" ? "3,000元" : "3,000"}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ul>
                                        <li>{language === "Chinese" ? "物資預計11/04（一）起陸續寄出，務必填寫正確地址（請勿填寫郵政信箱，限台灣境內），如11/11（一）前尚未收到物資，請務必撥打承辦單位02-5591-5658分機25，服務時間：週一至週五上午10:00~下午18:00。" : "Race kit are expected to be sent out starting from 11/04 (Monday). Please ensure to fill in the correct address (do not use a PO Box; limited to addresses within Taiwan). If you have not received the materials by 11/11 (Monday), please call the organizer at 02-5591-5658 ext. 25 during service hours: Mon to Fri, 10:00 AM - 6:00 PM."}</li>
                                        <li>{language === "Chinese" ? "請務必填寫正確的郵寄地址，禁止填寫郵政信箱，以免包裹無法寄達。" : "Please ensure to fill in the correct mailing address and do not use a PO Box to avoid undelivered packages."}</li>
                                        <li>{language === "Chinese" ? "因郵寄地址不全或無人簽收而造成物資無法送達而導致無法參賽者，大會將不另行補寄。物資請於活動結束後一週內上班時間，12/02(一)~12/06(五)，上午10:00~17:30憑身分證及參賽號碼至名衍行銷股份有限公司領取，逾期視同放棄。(地址：台北市大安區溫州街48巷14號1樓、電話02-55915658分機25。)" : "If materials cannot be delivered due to incomplete address or no one to sign for the package, resulting in the inability to participate, the organizers will not resend the materials. Please pick up the materials at BODY Marketing Co., Ltd. during office hours within one week after the event ends, from 12/02 (Monday) to 12/06 (Friday), 10:00 AM - 5:30 PM, with your ID and participant number. Late pickups will be considered as forfeiture. (Address: 1st Floor, No. 14, Lane 48, Wenzhou Street, Da’an District, Taipei City; Phone: 02-5591-5658 ext. 25)."}</li>
                                        <li>{language === "Chinese" ? "收到郵寄物資代表已完成報到手續，請於當日逕自前往活動會場集合即可。" : "Receiving the mailed materials indicates that you have completed the check-in procedure. Please proceed directly to the event venue on the day of the event."}</li>
                                        <li>{language === "Chinese" ? "收到郵寄物資後，請妥善保管，遺失恕不再補發。" : "Upon receiving the mailed materials, please keep them properly. Lost items will not be reissued."} </li>
                                        <li>{language === "Chinese" ? "若有其他相關賽事問題須詢問，請來電或來信洽詢，將有專人為您服務。" : "If you have any other questions related to the race, please call or email us, and we will have dedicated personnel to assist you."}</li>
                                        <li>{language === "Chinese" ? "客服電話 02-5591-5658分機25，服務時間：週一至週五工作日 09：00-18：00" : "Customer Service Phone: 02-5591-5658 ext. 25, Service Hours: Monday to Friday, 09:00-18:00"}</li>
                                        <li>{language === "Chinese" ? "客服信箱 katie@body-marketing.com ，回覆時間：週一至週五工作日 09：00-18：00" : "Customer Service Email: katie@body-marketing.com, Response Time: Monday to Friday, 09:00-18:00"}</li>
                                        <li>{language === "Chinese" ? "FB客服 「2024環法挑戰賽-日月潭站」，服務時間：週一至週五工作日 09：00-18：00" : `Facebook Customer Service: "2024 L'Étape du Tour de France - Sun Moon Lake", Service Hours: Monday to Friday, 09:00-18:00` }</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Precaution