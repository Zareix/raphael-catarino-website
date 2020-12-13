import * as React from "react";

import { IoConstructSharp } from "react-icons/io5";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles} className="container">
      <div className="row justify-content-center">
        <IoConstructSharp size={50} />
        <h1 className="ml-2 text-center">Mon site est en cours de construction !</h1>
      </div>
      <div className="row justify-content-center">
        <p className="text-center">
          En attendant vous pouvez me contacter par mail à cette adresse : <a href="mailto:raphcatarino@gmail.com">raphcatarino@gmail.com</a>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
