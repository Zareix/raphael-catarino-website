import React, { ReactNode } from "react";
import Head from "next/head";

import useWindowWidth from "@hooks/use-window-width";
import useThemeHandler from "@hooks/use-theme-handler";
import Navbar from "./Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  useThemeHandler();
  const { isMobile } = useWindowWidth();

  return (
    <>
      <Head>
        <title>Raphael Catarino | Portfolio</title>
      </Head>
      <header className="fixed top-0 isolate z-50 w-full">
        {isMobile ? <NavbarMobile /> : <Navbar />}
      </header>
      <main className="isolate">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
