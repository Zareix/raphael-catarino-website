import React from "react";

const compTextStyles = {
  fontSize: "20px",
};

const Competences = () => {
  // TODO : Use gatsby-image / graphql
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesWeb = importAll(
    require.context("../images/logoComp/web", false, /\.(png|jpe?g|svg)$/)
  );

  const imagesDb = importAll(
    require.context("../images/logoComp/database", false, /\.(png|jpe?g|svg)$/)
  );

  const imagesSoft = importAll(
    require.context("../images/logoComp/logiciels", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 row justify-content-center border-top p-4">
          <h1 className="col-12 text-center">Compétences</h1>
          <span style={compTextStyles} className="col-8 mt-3 text-center">
            Voici l'ensemble des langages que je maîtrise.
          </span>
          <div className="col-12 p-4 justify-content-center text-center row">
            <h3 className="col-6 border-bottom">Web</h3>
            <div className="row col-12 justify-content-center">
              {imagesWeb.map((img) => (
                <img
                  src={img}
                  alt={`$(img) logo`}
                  className="col-3 img-fluid"
                ></img>
              ))}
            </div>
          </div>
          <div className="col-12 p-4 justify-content-center text-center row">
            <h3 className="col-6 border-bottom">Software</h3>
            <div className="row col-12 justify-content-center">
              {imagesSoft.map((img) => (
                <img
                  src={img}
                  alt={`$(img) logo`}
                  className="col-3 img-fluid"
                ></img>
              ))}
            </div>
          </div>
          <div className="col-12 p-4 justify-content-center text-center row">
            <h3 className="col-6 border-bottom">Database</h3>
            <div className="row col-12 justify-content-center">
              {imagesDb.map((img) => (
                <img
                  src={img}
                  alt={`$(img) logo`}
                  className="col-3 img-fluid"
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
