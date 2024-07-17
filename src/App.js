import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/HomeUI/NavBar';
import { Footer } from './components/HomeUI/Footer';

// Route Components
import Home from './pages/Home';
import Event from './pages/Event';
import RaceKit from './pages/RaceKit';
import Route104 from './pages/Route104';
import Route29 from './pages/Route29';
import AboutTdf from './pages/AboutTdf';
import Contact from './pages/Contact';
import PartnerPage from './pages/PartnerPage';
import LetapeDuTour from './pages/LetapeDuTour';
import AboutLetape from './pages/AboutLetape';
import Media from './pages/Media';
import LetapeSunMoonLake from './pages/LetapeSunMoonLake';
import BecomePart from './pages/BecomePart';
import Volunteer from './pages/Volunteer';
import Faq from './pages/Faq';

//GA4
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-F3GZ4H7DPY"; // your Measurement ID

function App() {
  //Language Function
  const [language, setLanguage] = useState({});
  const toggleLanguage = async (e) => {
    e.preventDefault();
    await setLanguage((prev) => 
      prev === "Chinese" ? "English" : "Chinese");
  }
  useEffect(() => {
    document.body.className = language
  }, [language]);

  const router = [
    {
      path: "/",
      element: <Home language={language} />,
    },
    {
      path: "/about-tdf",
      element: <AboutTdf language={language} />,
    },
    {
      path: '/event-info',
      element: <Event language={language} />
    },
    {
      path: '/race-kit',
      element: <RaceKit language={language} />
    },
    {
      path: '/104k-route',
      element: <Route104 language={language} />
    },
    {
      path: '/29k-route',
      element: <Route29 language={language} />
    },
    {
      path: '/contact-us',
      element: <Contact language={language} />
    },
    {
      path: '/sponsor',
      element: <PartnerPage language={language} />
    },
    {
      path: '/letape-du-tour',
      element: <LetapeDuTour language={language} />
    },
    {
      path: '/about-letape',
      element: <AboutLetape language={language} />
    },
    {
      path: '/media',
      element: <Media language={language} />
    },
    {
      path: '/letape-sunmoonlake',
      element: <LetapeSunMoonLake language={language} />
    },
    {
      path: '/join-us',
      element: <BecomePart language={language} />
    },
    {
      path: '/volunteer',
      element: <Volunteer language={language} />
    },
    {
      path: '/faq',
      element: <Faq language={language} />
    },
  ]

  //GA4 function
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    ReactGA.send({ hitType: "pageview", page: "/about-letape", title: "About Letape" });
    ReactGA.send({ hitType: "pageview", page: "/about-tdf", title: "About Tu De France" });
    ReactGA.send({ hitType: "pageview", page: "/event-info", title: "Event" });
    ReactGA.send({ hitType: "pageview", page: "/race-kit", title: "Race Kit" });
    ReactGA.send({ hitType: "pageview", page: "/104k-route", title: "Route 104KM" });
    ReactGA.send({ hitType: "pageview", page: "/29k-route", title: "Route 29KM" });
    ReactGA.send({ hitType: "pageview", page: "/contact-us", title: "Contact Us" });
    ReactGA.send({ hitType: "pageview", page: "/sponsor", title: "Sponsor & Partner" });
    ReactGA.send({ hitType: "pageview", page: "/letape-du-tour", title: "Letape Du Tour" });
    ReactGA.send({ hitType: "pageview", page: "/media", title: "Media" });
    ReactGA.send({ hitType: "pageview", page: "/letape-sunmoonlake", title: "Letape Sun Moon Lake" });
    ReactGA.send({ hitType: "pageview", page: "/join-us", title: "Join Us" });
    ReactGA.send({ hitType: "pageview", page: "/volunteer", title: "Volunteer" });
    ReactGA.send({ hitType: "pageview", page: "/faq", title: "FAQ" });
}, [])
  
  return (
    <Router>
      <NavBar language={language} toggleLanguage={toggleLanguage}/>
      <Routes>
        {
          router.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))
        }
      </Routes>
      <Footer language={language} />
    </Router>
  );
}
export default App;