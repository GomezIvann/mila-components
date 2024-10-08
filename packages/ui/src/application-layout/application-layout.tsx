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
  z-index: 1;
`;

const SideNavContainer = styled.div`
  grid-area: side-nav;
  position: relative;
  z-index: 1;
`;

const MainContainer = styled.div`
  grid-area: main;
  min-height: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden auto;
`;

const ApplicationLayout = ({ children, footer, header, sideNavigation }: ApplicationLayoutProps) => (
  <LayoutContainer>
    {header && <HeaderContainer>{header}</HeaderContainer>}
    {sideNavigation && <SideNavContainer>{sideNavigation}</SideNavContainer>}
    <MainContainer>
      <main>{children}</main>
      {footer}
    </MainContainer>
  </LayoutContainer>
);

export default ApplicationLayout;
