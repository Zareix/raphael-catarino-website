import React from "react";

import { graphql } from "gatsby";

import styled from "styled-components";

const PageCv = styled.div`
  margin: auto;
  background: white;
  position: relative;
  width: 210mm;
  height: 297mm;
  display: flex;
  overflow: hidden;
  border-radius: 10px;

  @media print {
    border-radius: 0;
  }
`;

const CurriculumVitae = ({ data }) => {
  return <PageCv>{data.title} in progress</PageCv>;
};

export default CurriculumVitae;

export const fragmentBio = graphql`
  fragment CVFragment on DatoCmsCv {
    title
  }
`;
