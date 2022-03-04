import React from "react";
import styled from "styled-components";
import NavigationStyled from "./Navigation";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <NavigationStyled />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  position: fixed;
`;

export default Sidebar;
