import React, { ReactNode } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Raphael Catarino | Portfolio</title>
      </Head>
      <header className="fixed top-0 w-full isolate z-50">
        <Navbar />
      </header>
      <main className="isolate">{children}</main>
    </>
  );
};

export default Layout;
