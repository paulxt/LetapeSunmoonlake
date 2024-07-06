import React from 'react'
import Logo from '../../assets/img/letape-sunmoonlake-banne2-logo.png';

const Banner = () => {
    return (
        <section className="letape-sunmoonlake-banner">
            <div className="letape-sunmoonlake-header">
                <h1>L’Étape 日月潭站</h1>
            </div>
            <div className="letape-sunmoonlake-banner-2 text-center">
                <img src={Logo} alt="" />
                <h2>SUN MOON LAKE</h2>
                <h3>Heart of Formosa</h3>
                <p>
                    2024年我們希望將此運動盛事引進日月潭-全球極富盛名的自行車路線之一 <br/>
                    讓來自國內外的好朋友都能在這片土地共襄盛舉，感受環法魅力。 <br/>
                    日月潭為全島境內最大天然湖泊，湖水源自於合歡山。層巒疊嶂、湖水面波光粼粼就像是鑲嵌在土地的綠寶石 <br/>
                    本年度的環法挑戰賽由法國的環法路線專家親自場勘設計、讓國際賽事規格落地在日月潭 <br/>
                    活動結合日月潭在地元素與環法風格，打造出屬於這塊土地的環法盛宴！
                </p>
            </div>
            
        </section>
    )
}

export default Banner