import React from 'react'

const PartnerBanner = ({language}) => {
    return (
        <section className="partnerPage-banner">
            <div className="partnerPage-header">
                <h1>{language === "Chinese" ? "贊助夥伴" : "OFFICIAL PARTNERS"}</h1>
            </div>
            <img src="" alt="" />
        </section>
    )
}

export default PartnerBanner