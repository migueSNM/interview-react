import React from 'react';
import woloxerImage from '../../assets/images/img_woloxer.png';
import styled from 'styled-components';
import colors from '../../assets/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const FollowBox = styled.section`
    margin: 0 40px;
    background-color: ${colors.lightGray};
`;

const Hero = styled.div`
    background-image: url(${woloxerImage});
    background-size: cover;
    width: 750px;
    height: 422px;
    display: inline-block;
    color: ${colors.white};
`;

const H1 = styled.h1`
    font-size: 300%;
    text-align: center;
    margin-top: 130px;
`;

const TwitterAddress = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

const H2 = styled.h2`
    float: right;
    text-align: center;
    font-size: 200%;
    margin-top: 140px;
    margin-right: 120px;
`;

const Text = styled.span`
    margin-left: 5px;
`;

const Atlantis = styled.span`
    color: ${colors.atlantis};
    font-family: 'Montserrat-Bold'
`

const Cerulean = styled.span`
    color: ${colors.cerulean};
    font-family: 'Montserrat-Bold'
`

//  TODO change twitter icon

const FollowSection = () => (
    <FollowBox>
        <Hero>
            <H1><Atlantis>350 +</Atlantis> <Cerulean>Woloxers</Cerulean></H1>
            <TwitterAddress>
                <FontAwesomeIcon icon={faCoffee}/>
                <Text>@Wolox</Text>
            </TwitterAddress>
            <Button text='Síguenos'/>
        </Hero>
        <H2>Trabajamos para<br/><b><Cerulean>convertir</Cerulean> <Atlantis>ideas</Atlantis></b> en<br/>productos</H2>
    </FollowBox>
);

export default FollowSection;