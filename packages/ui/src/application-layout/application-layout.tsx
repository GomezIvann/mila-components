import styled from "styled-components";
import Header from "./header/header";
import SideNavigation from "./side-nav/side-navigation";
import ApplicationLayoutProps from "./types";
import Footer from "./footer/footer";
import { mediaQueries } from "../common/breakpoints";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "header header"
    "side-nav main"
    "side-nav footer";
  height: 100vh;
`;

const HeaderContainer = styled.div`
  grid-area: header;
`;

const SideNavContainer = styled.div`
  grid-area: side-nav;
  overflow-y: auto;
  height: 100%;

  ${mediaQueries.md} {
    display: none;
  }
`;

const MainContent = styled.main`
  grid-area: main;
  overflow-y: auto;
  height: 100%;
`;

const FooterContainer = styled.div`
  grid-area: footer;
`;

const ApplicationLayout = ({ children, footer, header, sideNavigation }: ApplicationLayoutProps) => (
  <LayoutContainer>
    <HeaderContainer>{header}</HeaderContainer>
    <SideNavContainer>{sideNavigation}</SideNavContainer>
    <MainContent>{children}</MainContent>
    <FooterContainer>{footer}</FooterContainer>
  </LayoutContainer>
);

ApplicationLayout.Header = Header;
ApplicationLayout.SideNavigation = SideNavigation;
ApplicationLayout.Footer = Footer;

export default ApplicationLayout;
