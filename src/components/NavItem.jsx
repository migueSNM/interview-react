import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../assets/colors'

const Button = styled.li`
    color: ${props => props.primary && colors.cerulean || colors.black};
    border: ${props => props.primary && `1px solid ${colors.cerulean}` || 'none'};
    border-radius: ${props => props.primary && '30px' || '0'};
    background-color: #00000000;
    display: inline;
    padding: ${props => props.primary && '10px 60px' || '10px 20px'};
`;

const NavItem = (props) => {
    return (
        <Button primary={props.primary}>{props.name}</Button>
    )
};

export default NavItem;