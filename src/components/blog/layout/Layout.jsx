import React from "react";
import styled from "styled-components";

import Footer from "../../home-page/layout/Footer";
import Navigation from "../../home-page/layout/navbar/Navbar";
import { ThemeProvider } from "../../utils/context/theme-context";
import SkipToMainContent from "../../home-page/layout/skip-to-main/SkipToMainContent";
import SidePanel from "./SidePanel";

const Main = styled.main`
  z-index: 10;
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 5rem;
  flex-direction: ${({ sidePanelEnabled }) =>
    sidePanelEnabled ? "row" : "column"};
  min-height: 80vh;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const Layout = ({ children, sidePanel, langSlug }) => {
  return (
    <ThemeProvider>
      <SkipToMainContent />
      <Navigation
        alwaysDisplayed
        iconBtnTarget={"/blog/"}
        langSlug={langSlug}
      />
      <Main id="main" sidePanelEnabled={sidePanel}>
        {children}
        {sidePanel && <SidePanel />}
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
