import React, { Component } from 'react';
import hero from '../assets/images/Ic_ilustra_Hero.png';
import styled from 'styled-components';

const Hero = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const H1 = styled.h1`
`;

const Img = styled.img`
`;

const HeroBox = () => (
    <Hero>
        <H1>Bienvenido a tu<br/>Entrevista Técnica en<br/>Wolox</H1>
        <Img src={hero} alt="Ilustra Hero"/>
    </Hero>
);

export default HeroBox;