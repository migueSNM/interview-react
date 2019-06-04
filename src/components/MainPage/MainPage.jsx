import React from 'react';
import styled from 'styled-components';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import TechSection from './components/TechSection/TechSection';
import FollowSection from './components/FollowSection/FollowSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';
import FooterSection from './components/FooterSection/FooterSection';

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const MainPage = () => (
    <Container>
        <WelcomeSection/>
        <TechSection/>
        <FollowSection/>
        <BenefitsSection/>
        <RequirementsSection/>
        <FooterSection/>
    </Container>
);

export default MainPage;