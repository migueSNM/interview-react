import React from 'react';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import TechSection from './components/TechSection/TechSection';
import FollowSection from './components/FollowSection/FollowSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';
import FooterSection from './components/FooterSection/FooterSection';

const MainPage = () => (
    <>
        <WelcomeSection/>
        <TechSection/>
        <FollowSection/>
        <BenefitsSection/>
        <RequirementsSection/>
        <FooterSection/>
    </>
);

export default MainPage;