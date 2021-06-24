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
                  <SidebarLink to="about">About</SidebarLink>
                  <SidebarLink to="discover">Discover</SidebarLink>
                  <SidebarLink to="services">Serviços</SidebarLink>
                  <SidebarLink to="signup">Sign Up</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/signin">Sign In</SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar;