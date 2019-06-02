import React from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors';
import backgroundHeader from '../../../../assets/images/Bg_Header.png'
import Button from '../../../Button';

const Container = styled.footer`
    background-image: url(${backgroundHeader});
    text-align: center;
    padding: 40px;
`;

const H1 = styled.h1`
    font-size: 220%;
    font-weight: bold;
`;

const H2 = styled.h2`
    font-size: 160%;
    font-weight: 300;
    margin-bottom: 60px;
`;

const Cerulean = styled.span`
    color: ${colors.cerulean};
`;

const Logo = styled.p`
    margin-top: 120px;
    margin-bottom: 60px;
    color: ${colors.black};
    letter-spacing: 10px;
    font-weight: bold;
`;

const BenefitsSection = () => (
    <Container>
        <H1>Gracias por <Cerulean>completar el ejercicio</Cerulean></H1>
        <H2>Te invitamos a ver más información</H2>
        <Button primary text='Conocer más'/>
        <Logo>WOLOX</Logo>
    </Container>
);

export default BenefitsSection;