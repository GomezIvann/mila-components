import styled from "styled-components";
import ApplicationLayoutProps from "./types";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "header header"
    "side-nav main"
    "side-nav main";
  height: 100vh;
`;

const HeaderContainer = styled.div`
  grid-area: header;
`;

const SideNavContainer = styled.div`
  grid-area: side-nav;
`;

const MainContainer = styled.main`
  grid-area: main;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const ApplicationLayout = ({ children, footer, header, sideNavigation }: ApplicationLayoutProps) => (
  <LayoutContainer>
    <HeaderContainer>{header}</HeaderContainer>
    <SideNavContainer>{sideNavigation}</SideNavContainer>
    <MainContainer>
      {children}
      {footer}
    </MainContainer>
  </LayoutContainer>
);

export default ApplicationLayout;
