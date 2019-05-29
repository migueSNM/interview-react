import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo_full_color.svg';
import NavButton from './NavButton'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const NavBar = () => (
    <Nav>
        <img src={logo} alt="Logo"/>
        <Buttons>
            <NavButton name={'Inicio'}/>
            <NavButton name={'Tecnologías'}/>
            <NavButton name={'Beneficios'}/>
            <NavButton name={'Requerimientos'}/>
        </Buttons>
    </Nav>
);

export default NavBar;