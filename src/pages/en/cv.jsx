import React from "react";

import { graphql } from "gatsby";
import styled from "styled-components";

import CurriculumVitae from "../../components/cv/CurriculumVitae";

const Wrapper = styled.div`
  -webkit-print-color-adjust: exact;
  padding: 0;
  margin: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  height: 100vh;
  display: grid;
`;

const CV = ({ data }) => {
  const cvData = data.datoCmsCv;

  return (
    <Wrapper>
      <a
        className="mx-auto mt-4 mb-2 rounded-lg bg-blue-700 px-3 py-2 text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg print:hidden"
        href={`${process.env.API_ADRESS}/cv-api?lang=en`}
      >
        {cvData.downloadButtonText}
      </a>
      <CurriculumVitae data={cvData}></CurriculumVitae>
    </Wrapper>
  );
};

export default CV;

export const query = graphql`
  query CVEn {
    datoCmsCv(locale: { eq: "en" }) {
      downloadButtonText
      ...CVFragment
    }
  }
`;
