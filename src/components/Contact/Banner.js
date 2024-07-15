import React from 'react';
const Banner = ({language}) => {
    return (
        <section className='contact-banner'>
            <div className="contact-header">
                <h1>{language === "Chinese" ? "聯絡我們" : "CONTACT US"}</h1>
            </div> 
            <img src="" alt="" />
        </section>
    )
}

export default Banner