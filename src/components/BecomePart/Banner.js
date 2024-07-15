import React from 'react'

const Banner = ({language}) => {
    return (
        <section className="become-part-banner">
            <div className="become-part-header">
                <h1>{language === "Chinese" ? "成為合作夥伴" : "BOCOME PARTNERS"}</h1>
            </div>
            <div className="become-part-banner2">
                <div className="become-part-txtx">
                    <h2><em>BECOME L’ÉTAPE SUN MOON LAKE PARTNERSHIP</em></h2>
                    {language === "Chinese" ? <p>
                        邀請您成為我們的合作夥伴！ <br />
                        讓您的品牌為經典賽事增加亮點 <br />
                        2024 首屆環法自行車挑戰賽日月潭站 <br />
                        打造全新國際化運動賽事體驗
                    </p> : <p>
                        Inviting you to become our partner!<br />
                        Let your brand shine in a classic event.<br />
                        The inaugural 2024 Sun Moon Lake Station of the Tour de France Cycling <br/>
                        Challenge is set to create a new international sports event experience.
                    </p>}
                    
                    <button><strong>EXPERIENCE THE TOUR DE FRANCE LEGEND</strong></button>
                </div>
            </div>
        </section>
    )
}

export default Banner