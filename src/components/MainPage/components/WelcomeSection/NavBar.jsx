import React from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/images/logo_full_color.svg';
import NavItem from './NavItem'

const Nav = styled.nav`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavList = styled.ul`
    margin-right: 100px;
    font-weight: 500;
    font-size: 
`

const Img = styled.img`
    height: 30px;
    width: auto;
    margin-left: 100px;
`

const NavBar = () => (
    <Nav>
        <Img src={logo} alt="Logo"/>
        <NavList>
            <NavItem name={'Inicio'}/>
            <NavItem name={'Tecnologías'} to="#technologies"/>
            <NavItem name={'Beneficios'} to="#benefits"/>
            <NavItem name={'Requerimientos'} to="#requirements"/>
            <NavItem primary name={'Login'} to="/login"/>
        </NavList>
    </Nav>
);

export default NavBar;