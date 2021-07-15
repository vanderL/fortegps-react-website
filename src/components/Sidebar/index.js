import React from 'react';

import {
    SidebarContainer,
    CloseIcon, 
    Icon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu 
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>

          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
                  <SidebarLink to="discover" onClick={toggle}>ForteGPS</SidebarLink>
                  <SidebarLink to="services" onClick={toggle}>Serviços</SidebarLink>
                  <SidebarLink to="signup" onClick={toggle}>Contato</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/signin">Sign In</SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar;