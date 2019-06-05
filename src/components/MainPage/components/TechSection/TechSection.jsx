import React from 'react';
import { ReactComponent as Logo } from '../../../../assets/images/Ic_Tecnologys.svg';
import styled from 'styled-components';

const Hero = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 60px 80px 100px;
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 180%;
`;

const HeroBox = () => (
    <Hero id="technologies">
        <H3>Estamos buscando<br/>para incorporar gente<br/>increíble para estas<br/>tecnologías:</H3>
        <Logo/>
    </Hero>
);

export default HeroBox;