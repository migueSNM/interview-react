import React from 'react';
import NavBar from './NavBar';
import HeroBox from './HeroBox';
import styled from 'styled-components';
import backgroundHeader from '../assets/images/Bg_Header.png'

const Header = styled.header`
    height: 100vh;
    background-image: url(${backgroundHeader});
    background-style: cover;
    padding: 80px 0;
`;

const WelcomeSection = () => (
    <Header>
        <NavBar/>
        <HeroBox/>
    </Header>
);

export default WelcomeSection;