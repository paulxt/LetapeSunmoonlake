import React from 'react'
import '../styles.css/route29.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Route29Banner from '../components/Route29/Route29Banner';
import RouteMap from '../components/Route29/RouteMap';
import RouteGpx from '../components/Route29/RouteGpx';
import Slow from '../components/Route29/Slow';
import RouteContent from '../components/Route29/RouteContent';
import RouteSpotlight from '../components/Route29/RouteSpotlight';

const Route29 = ({language}) => {
    return (
        <div className='route-29'>
            <Route29Banner language={language} />
            <RouteMap language={language} />
            <RouteGpx language={language} />
            <Slow language={language} />
            <RouteContent language={language} />
            <RouteSpotlight language={language} />
        </div>
    )
}

export default Route29