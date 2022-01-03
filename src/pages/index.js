import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Services from '../components/Services';
import ServicesIcones from '../components/ServicesIcon';
import Footer from '../components/Footer';

import CookieConsent, { Cookies } from "react-cookie-consent";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFive} />
            <ServicesIcones />
            <Services />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
            <CookieConsent
                debug={true}
                location='bottom'
                style={{ background: '#000', textAlign: "left" }}
                buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }}
                buttonText="Ok, concordo!"
                expires={30}
            >
                Este website utiliza cookies funcionais para facilitar sua experiência de navegação e proporcionar recursos relacionados às redes sociais, bem como cookies não funcionais para a análise de tráfego no website. Por gentileza, recomendamos que você consulte nossa política de privacidade para entender como são tratados os seus dados coletados durante a navegação do site. Ao clicar em “Permitir Cookies” você concorda de forma expressa com uso dos cookies funcionais e não funcionais mencionados na Política de Privacidade
            </CookieConsent>
        </>
    )
};

export default Home;