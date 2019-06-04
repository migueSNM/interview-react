import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import colors from '../../../../assets/colors'

const ListItem = styled(Link)`
    color: ${props => (props.primary && colors.cerulean) || colors.black};
    border: ${props => (props.primary && `1px solid ${colors.cerulean}`) || 'none'};
    border-radius: ${props => (props.primary && '30px') || '0'};
    background-color: #00000000;
    display: inline;
    padding: ${props => (props.primary && '10px 60px') || '10px 20px'};
    text-decoration: none;
`;

const NavItem = (props) => {
    return (
        <ListItem primary={props.primary} to={props.to}>
            {props.name}
        </ListItem>
    )
};

export default NavItem;