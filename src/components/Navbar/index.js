import React from 'react';
import {FaBars} from 'react-icons/fa';

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavLinks, 
    NavMenu,
    NavBtn,
    NavBtnLink
} from './styles';

const Navbar = ({ toggle }) => {
    return (    
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>ForteGPS</NavLogo>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Nossos Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Contrata</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                    <NavBtn>
                        <NavBtnLink to="/signin">Login</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;