import React from 'react'

const Banner = ({language}) => {
    return (
        <section className="letape-du-tour-banner">
            <div className="letape-du-tour-header">
                {language === "Chinese" ? <h1>前往L’Étape du Tour</h1> : <h1>L’ÉTAPE DU TOUR</h1>}
            </div>
            <div className="banner-2">
                <h1 className='text-center'>{language === "Chinese" ? "環法自行車錦標賽" : "L’ÉTAPE CHAMPIONSHIP"}</h1>
                <h1 className='text-stroke text-center'>L’Étape du Tour</h1>
            </div>
        </section>
    )
}

export default Banner