import React from 'react'
import '../styles.css/route104.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Route104Banner from '../components/Route104/Route104Banner';
import RouteMap from '../components/Route104/RouteMap';
import RouteGpx from '../components/Route104/RouteGpx';
import Slow from '../components/Route104/Slow';
import RouteContent from '../components/Route104/RouteContent';
import RouteSpotlight from '../components/Route104/RouteSpotlight';

const Route104 = ({language}) => {
    return (
        <div className='route-104'>
            <Route104Banner language={language} />
            <RouteMap language={language} />
            <RouteGpx language={language} />
            <Slow language={language} />
            <RouteContent language={language} />
            <RouteSpotlight language={language} />
        </div>
    )
}

export default Route104