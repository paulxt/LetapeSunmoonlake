import React from 'react';
import '../styles.css/faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/Faq/Banner';
import SignUpQ from '../components/Faq/SignUpQ';
import GiftQ from '../components/Faq/GiftQ';
import RouteQ from '../components/Faq/RouteQ';
import CompetitionQ from '../components/Faq/CompetitionQ';

const Faq = () => {
    return (
        <div className="faq">
            <Banner />
            <SignUpQ />
            <GiftQ />
            <RouteQ />
            <CompetitionQ />
        </div>
    )
}

export default Faq