import { ReactNode, useState } from "react";
import Head from "next/head";

import useWindowWidth from "@hooks/use-window-width";
import useThemeHandler from "@hooks/use-theme-handler";
import Navbar from "./Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Footer from "./Footer";
import Contact from "@components/Home/Contact";
import { NavigationLink } from "@models/Layout";

type Props = {
  children: ReactNode;
  links: NavigationLink[];
};

const Layout = ({ children, links }: Props) => {
  useThemeHandler();
  const { isMobile } = useWindowWidth();
  const [contactOpen, setContactOpen] = useState(false);
  const toggleContactOpen = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <>
      <Head>
        <title>Raphael Catarino | Portfolio</title>
      </Head>
      <header className="fixed top-0 isolate z-50 w-full">
        {isMobile ? (
          <NavbarMobile links={links} toggleContactOpen={toggleContactOpen} />
        ) : (
          <Navbar links={links} toggleContactOpen={toggleContactOpen} />
        )}
      </header>
      <main className="isolate">{children}</main>
      <Footer toggleContactOpen={toggleContactOpen} />
      {contactOpen && <Contact toggleContactOpen={toggleContactOpen} />}
    </>
  );
};

export default Layout;
