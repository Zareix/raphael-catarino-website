import { ReactNode } from "react";

import Navbar from "./Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Footer from "./Footer";
import { NavigationLink } from "@models/Layout";
import SkipToMainContent from "@components/ui/SkipToMainContent";
import ThemeHandler from "@hooks/use-theme-handler";

type Props = {
  children: ReactNode;
  links: NavigationLink[];
  linkQuery?: string;
};

const Layout = ({ children, links, linkQuery = "/" }: Props) => {
  return (
    <>
      <ThemeHandler />
      <SkipToMainContent />
      <header className="fixed top-0 isolate z-50 w-full">
        <NavbarMobile links={links} linkQuery={linkQuery} />
        <Navbar links={links} linkQuery={linkQuery} />
      </header>
      <main id="main" className="isolate">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
