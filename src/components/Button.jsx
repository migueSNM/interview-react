import React from 'react';
import styled from 'styled-components';
import colors from '../assets/colors';

const Btn = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 100px;
    background: ${props => (props.primary && colors.cerulean) || 'none'};
    color: ${colors.white};
    border: 2px solid ${colors.cerulean};
    border-radius: 30px;
    font-family: ${props => (props.primary && 'Montserrat-Bold') || 'Montserrat'};
    font-size: 100%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const Button = (props) => (
    <Btn primary={props.primary}>{props.text}</Btn>
);

export default Button;