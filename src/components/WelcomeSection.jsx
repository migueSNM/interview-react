import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import backgroundHeader from '../assets/images/Bg_Header.png'

const Header = styled.header`
    height: 100vh;
    background-image: url(${backgroundHeader});
    background-style: cover;
    padding-top: 60px;
`;

const WelcomeSection = () => (
    <Header>
        <NavBar/>
    </Header>
);

export default WelcomeSection;