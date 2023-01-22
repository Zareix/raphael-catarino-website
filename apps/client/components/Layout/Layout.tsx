import { ReactNode, useState } from "react";

import useWindowWidth from "@hooks/use-window-width";
import useThemeHandler from "@hooks/use-theme-handler";
import Navbar from "./Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Footer from "./Footer";
import Contact from "@components/Home/Contact";
import { NavigationLink } from "@models/Layout";
import { ParsedUrlQueryInput } from "querystring";

type Props = {
  children: ReactNode;
  links: NavigationLink[];
  linkQuery?: string | ParsedUrlQueryInput;
};

const Layout = ({ children, links, linkQuery }: Props) => {
  useThemeHandler();
  const { isMobile } = useWindowWidth();
  const [contactOpen, setContactOpen] = useState(false);
  const toggleContactOpen = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <>
      <header className="fixed top-0 isolate z-50 w-full">
        {isMobile ? (
          <NavbarMobile
            links={links}
            toggleContactOpen={toggleContactOpen}
            linkQuery={linkQuery}
          />
        ) : (
          <Navbar
            links={links}
            toggleContactOpen={toggleContactOpen}
            linkQuery={linkQuery}
          />
        )}
      </header>
      <main className="isolate">{children}</main>
      <Footer toggleContactOpen={toggleContactOpen} />
      {contactOpen && <Contact toggleContactOpen={toggleContactOpen} />}
    </>
  );
};

export default Layout;
