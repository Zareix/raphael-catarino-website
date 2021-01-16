import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer"


const Layout = (props) => {
  return (
    <div>
      <Navigation/>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
