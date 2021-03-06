import React from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors';
import BenefitBox from './BenefitBox';
import hour from '../../../../assets/images/Ic_Hour.svg';
import homeOffice from '../../../../assets/images/Ic_HomeOffice.svg';
import workshops from '../../../../assets/images/Ic_Workshops.svg';
import drinkSnacks from '../../../../assets/images/Ic_DrinkSnacks.svg';
import laptop from '../../../../assets/images/Ic_laptop.svg';
import brain from '../../../../assets/images/Ic_brain.svg';

const Container = styled.section`
    margin: 115px 60px;
    padding-bottom: 20px;
    display: inline-block;
    box-shadow: 0 4px 2px -2px #00000010;
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 180%;
    text-align: center;
    margin-bottom: 60px;
`;

const Cerulean = styled.span`
    color: ${colors.cerulean};
`;

const BenefitsSection = () => (
    <Container id="benefits">
        <H3>Entre los beneficios que ofrecemos se encuentran <Cerulean>;)</Cerulean></H3>
        <BenefitBox text="Flexibilidad Horaria" img={hour}/>
        <BenefitBox text="Home Office" img={homeOffice}/>
        <BenefitBox text="Capacitaciones y workshops" img={workshops}/>
        <BenefitBox text="Snacks, frutas y bebidas gratis" img={drinkSnacks}/>
        <BenefitBox text="Semana remota" img={laptop}/>
        <BenefitBox text="Trabajar en últimas tecnologías" img={brain}/>
    </Container>
);

export default BenefitsSection;