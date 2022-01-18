import React from "react"
import styled from "styled-components"

import Footer from "../../home-page/layout/Footer"
import Navigation from "../../home-page/layout/navbar/Navbar"
import { ThemeProvider } from "../../utils/context/theme-context"
import SidePanel from "./SidePanel"

const Main = styled.main`
  z-index: 10;
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 5rem;
  flex-direction: ${({ sidePanelEnabled }) => (sidePanelEnabled ? "row" : "column")};
  min-height: 80vh;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
    margin-bottom: 0;
  }
`

const Layout = ({
  children,
  footerData,
  contactData,
  navData,
  latestPosts,
  currentPostId,
  location,
  sidePanel,
  langSlug,
}) => {
  const navigationData = {
    links: navData.navLinks,
    labelContactLink: navData.navLabelContactLink,
    contactBtnVisible: navData.navContactBtnVisible,
    blogBtnVisible: false,
    labelBlogLink: "",
  }

  return (
    <ThemeProvider>
      <Navigation
        location={location}
        data={navigationData}
        alwaysDisplayed
        iconBtnTarget={
          (location.pathname.match(/(\/(..)\/)/)
            ? location.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
            : "") + "/blog/"
        }
        langSlug={langSlug}
      />
      <Main sidePanelEnabled={sidePanel}>
        {children}
        {sidePanel && (
          <SidePanel latestPosts={latestPosts} currentPostId={currentPostId} location={location} />
        )}
      </Main>
      <Footer dataContact={contactData} message={footerData.footerMessage} />
    </ThemeProvider>
  )
}

export default Layout
