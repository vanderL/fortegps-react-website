import React from 'react';
import {FaBars} from 'react-icons/fa';
import Logo from '../../images/FORTEGPS_PNG.png'

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavLinks, 
    NavMenu,
    NavBtn,
    NavBtnLink,
    ImgLogo
} from './styles';

const Navbar = ({ toggle }) => {
    return (    
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <ImgLogo src={Logo} />
                    </NavLogo>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Nossos Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='instalacao'>Contrata</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='payment'>Segunda Via</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
                <NavBtn>
                    <NavBtnLink href="http://www10.itrack.com.br/cfortegps/controlemonitoramento" target="_blank">Rastrear seu Veículo</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;