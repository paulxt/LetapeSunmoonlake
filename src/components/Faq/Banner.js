import React from 'react'

const Banner = ({language}) => {
    return (
        <section className="faq-banner">
            <div className="faq-header">
                <h1>{language === "Chinese" ? "常見問題" : "FAQ"}</h1>
            </div>
            <img src="" alt="" />
        </section>
    )
}

export default Banner