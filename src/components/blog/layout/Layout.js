import React from "react"
import styled from "styled-components"

import Footer from "../../home-page/layout/Footer"
import Navigation from "../../home-page/layout/navbar/Navbar"
import SidePanel from "./SidePanel"

const Content = styled.section`
  width: 75%;
  margin: 3rem;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`

const Layout = ({ children, data, location }) => {
  const navData = {
    links: [
      {
        label: "Home",
        target: "/",
      },
      {
        label: "Blog",
        target: "/blog/",
      },
    ],
    labelContactLink: data.contact.contactBtnText,
    contactBtnVisible: false,
  }

  return (
    <>
      <Navigation location={location} data={navData} alwaysDisplayed />
      <main className="flex md:w-11/12 mx-auto mb-0">
        <Content className="bg-white dark:bg-gray-800 shadow-md pb-10 md:pb-0">
          {children}
        </Content>
        <SidePanel
          latestPosts={data.latestPosts}
          currentPostId={data.currentPostId}
          location={location}
        />
      </main>
      <Footer dataContact={data.contact} message={data.footer.footerMessage} />
    </>
  )
}

export default Layout
