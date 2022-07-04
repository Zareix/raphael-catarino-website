import Head from 'next/head';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Raphael Catarino | Portfolio</title>
      </Head>
      <header></header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
