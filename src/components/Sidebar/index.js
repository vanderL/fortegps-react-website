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

const Sidebar = () => {
  return (
      <SidebarContainer>
          <Icon>
              <CloseIcon />
          </Icon>

          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="about">Sobre</SidebarLink>
                  <SidebarLink to="discover">ForteGPS</SidebarLink>
                  <SidebarLink to="services">Serviços</SidebarLink>
                  <SidebarLink to="signup">Contato</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/signin">Sign In</SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar;