import React from 'react';
import techImage from '../../assets/images/Ic_Tecnologys.svg';
import styled from 'styled-components';

const Hero = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 60px 40px 100px;
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 180%;

`;

const Img = styled.img`

`;

const HeroBox = () => (
    <Hero>
        <H3>Estamos buscando<br/>para incorporar gente<br/>increíble para estas<br/>tecnologías:</H3>
        <Img src={techImage} alt="Technologies"/>
    </Hero>
);

export default HeroBox;