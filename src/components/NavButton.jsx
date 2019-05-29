import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../assets/colors'

const Button = styled.button`
    color: ${props => props.primary && colors.cerulean || colors.black};
    border: ${props => props.primary && `1px solid ${colors.cerulean}` || 'none'};
    border-radius: ${props => props.primary && '10px' || '0'};
    background-color: #00000000;
`;

const NavButton = (props) => {
    return (
        <Button primary={props.primary}>{props.name}</Button>
    )
};

export default NavButton;