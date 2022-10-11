import React, { ReactNode } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import useWindowWidth from '@hooks/use-window-width';
import NavbarMobile from './Navbar/NavbarMobile';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { isMobile } = useWindowWidth();
  return (
    <>
      <Head>
        <title>Raphael Catarino | Portfolio</title>
      </Head>
      <header className="fixed top-0 w-full isolate z-50">
        {isMobile ? <NavbarMobile /> : <Navbar />}
      </header>
      <main className="isolate">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
