import React from 'react'
import '../styles.css/media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/Media/Banner';
import Video from '../components/Media/Video';
import PhotoGallery from '../components/Media/PhotoSection.tsx';

const Media = () => {
    return (
        <div className="media-page">
            <Banner />
            <Video />
            <PhotoGallery />
        </div>
    )
}

export default Media