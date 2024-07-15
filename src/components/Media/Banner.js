import React from 'react'

const Banner = ({language}) => {
    return (
        <section className="media-banner">
            <div className="media-header">
                <h1>{language === "Chinese" ? "媒體專區" : "MEDIA"}</h1>
            </div>
            <img src="" alt="" />
        </section>
    )
}

export default Banner