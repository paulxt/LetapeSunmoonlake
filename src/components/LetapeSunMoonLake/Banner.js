import React from 'react'
import Logo from '../../assets/img/letape-sunmoonlake-banne2-logo.png';

const Banner = ({language}) => {
    console.log(language);
    return (
        <section className="letape-sunmoonlake-banner">
            <div className="letape-sunmoonlake-header">
                <h1>{language === "Chinese" ? "L’Étape 日月潭站" : "L’ÉTAPE SUN MOON LAKE"}</h1>
            </div>
            <div className="letape-sunmoonlake-banner-2 text-center">
                <img src={Logo} alt="" />
                <h2>SUN MOON LAKE</h2>
                <h3>Heart of Formosa</h3>
                {language === "Chinese" ?
                    <p>
                        2024年我們希望將此運動盛事引進日月潭-全球極富盛名的自行車路線之一 <br/>
                        讓來自國內外的好朋友都能在這片土地共襄盛舉，感受環法魅力。 <br/>
                        日月潭為全島境內最大天然湖泊，湖水源自於合歡山。層巒疊嶂、湖水面波光粼粼就像是鑲嵌在土地的綠寶石 <br/>
                        本年度的環法挑戰賽由法國的環法路線專家親自場勘設計、讓國際賽事規格落地在日月潭 <br/>
                        活動結合日月潭在地元素與環法風格，打造出屬於這塊土地的環法盛宴！
                    </p> : <p className='px-4'>
                        In 2024, we aim to bring this prestigious sporting event to Sun Moon Lake - one of the world's renowned cycling routes.<br/>
                        We want friends from both domestic and international communities to come together on this land, experiencing the charm of the Tour de France.<br />
                        Sun Moon Lake is Taiwan's largest natural lake, with its water originating from Mount Hehuan. <br />
                        Its picturesque landscape, with rolling mountains and shimmering lake waters, resembles a green gem set in the land.<br />
                        This year's Tour de France Challenge will feature a route meticulously designed by Tour de France route experts from France, ensuring international race standards are met at Sun Moon Lake. The event will blend local elements of Sun Moon Lake with the style of the Tour de France, creating a Tour de France feast unique to this region!
                </p>}
            </div>
        </section>
    )
}

export default Banner