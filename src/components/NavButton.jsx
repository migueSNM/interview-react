import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
`;

const NavButton = (props) => (
    <Button>{props.name}</Button>
);

export default NavButton;