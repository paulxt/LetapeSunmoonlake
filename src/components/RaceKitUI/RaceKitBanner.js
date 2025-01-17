import React from 'react'

const RaceKitBanner = ({language}) => {
    return (
        <section className="racekit-banner">
            <div className="racekit-header">
                <h1>{language === "Chinese" ? "環法挑戰賽限定禮盒" : "REGISTRATION GIFT"}</h1>
            </div>
            <img src="" alt="" />
        </section>
    )
}

export default RaceKitBanner