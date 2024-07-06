import React from 'react'
import '../../src/styles.css/partner-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import PartnerSection from '../components/HomeUI/PartnerSection'
import PartnerBanner from '../components/PartnerPage/PartnerBanner';

const PartnerPage = () => {
    return (
        <div className='partner-page'>
            <PartnerBanner/>
            <PartnerSection />
        </div>
    )
}

export default PartnerPage