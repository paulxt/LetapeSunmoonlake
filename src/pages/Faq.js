import React from 'react';
import '../styles.css/faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/Faq/Banner';
import SignUpQ from '../components/Faq/SignUpQ';
import GiftQ from '../components/Faq/GiftQ';
import RouteQ from '../components/Faq/RouteQ';
import CompetitionQ from '../components/Faq/CompetitionQ';

const Faq = ({language}) => {
    return (
        <div className="faq">
            <Banner language={language} />
            <SignUpQ language={language} />
            <GiftQ language={language} />
            <RouteQ language={language} />
            <CompetitionQ language={language} />
        </div>
    )
}

export default Faq