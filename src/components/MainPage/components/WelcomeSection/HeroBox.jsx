import React from 'react';
import hero from '../../../../assets/images/Ic_ilustra_Hero.png';
import styled from 'styled-components';
import colors from '../../../../assets/colors';

const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 100px;
`;

const H1 = styled.h1`
    font-weight: 400;
    margin-bottom: 150px;

`;

const Img = styled.img`
    transform: scaleX(-1);
    margin-right: 100px;
`;

const Green = styled.span`
    color: ${colors.atlantis};
    font-family: 'Montserrat-Bold';
`

const HeroBox = () => (
    <Hero>
        <H1>Bienvenido a tu<br/><b>Entrevista Técnica</b> en<br/><Green>Wolox</Green></H1>
        <Img src={hero} alt="Ilustra Hero"/>
    </Hero>
);

export default HeroBox;