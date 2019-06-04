import React from 'react';
import styled from 'styled-components';
import ReqBox from './ReqBox';
import bullet1 from '../../../../assets/images/Ic_Bullet_1.svg';
import bullet2 from '../../../../assets/images/Ic_Bullet_2.svg';
import bullet3 from '../../../../assets/images/Ic_Bullet_3.svg';

const Hero = styled.section`
    display: inline-block;
    text-align: center;
    width: 100%;
`;

const H3 = styled.h3`
    font-family: 'Montserrat-Bold';
    font-size: 180%;
    width: 50%;
    float: left;
    margin: 90px auto;
`;

const ReqContainer = styled.div`
    width: 45%;
    display: block;
    float: left;
`;

const HeroBox = () => (
    <Hero id="requirements">
        <H3>Requerimientos</H3>
        <ReqContainer>
            <ReqBox bullet={bullet1} text="Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos"/>
            <ReqBox bullet={bullet2} text="Inglés intermedio/avanzado"/>
            <ReqBox bullet={bullet3} text="Conocimiento en metodologías ágiles (deseables)"/>
        </ReqContainer>
    </Hero>
);

export default HeroBox;