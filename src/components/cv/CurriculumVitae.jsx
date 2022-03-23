import React from "react";

import { graphql } from "gatsby";

import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const PageCv = styled.div`
  margin: auto;
  background: white;
  position: relative;
  width: 210mm;
  height: 297mm;
`;

const CurriculumVitae = ({ data }) => {
  return (
    <PageCv className="flex shadow-md">
      <section className="w-1/3 bg-gray-400">
        <GatsbyImage {...data.pp} objectFit="contain" />
        Quis elit ad laboris reprehenderit nulla est amet ut deserunt id ad. Ve.
      </section>
      <section className="w-2/3 bg-gray-300">
        <article className="max-h-[20%] bg-gray-100 ">{data.title}</article>
        <article>
          Duis esse in amet duis adipisicing cupidatat anim culpa pariatur
          cillum. Commodo sint duis aute cupidatat dolor laborum excepteur. Id
          dolor et sit consequat reprehenderit consectetur duis proident sit et
          duis Lorem enim reprehenderit. Eiusmod dolor dolore voluptate nostrud
          culpa deserunt enim. Eiusmod esse dolor minim Lorem laboris voluptate
          in enim ut. Anim sint occaecat cillum commodo ipsum id proident velit
          sint fugiat. Pariatur anim aute consectetur deserunt exercitation et
          magna qui dolore ipsum ut. Ad ut reprehenderit ex occaecat ut ex ad
          consequat dolore veniam occaecat eu labore. Reprehenderit qui ut
          occaecat velit nulla pariatur eu commodo. Anim exercitation amet
          commodo incididunt ex ex elit ea Lorem proident in aute. Enim sunt
          elit tempor ex ut deserunt officia eu voluptate fugiat id eiusmod et.
          Tempor adipisicing occaecat ullamco minim culpa tempor sit officia
          enim tempor eu. Ut voluptate cillum consectetur nostrud magna fugiat
          sit qui minim aliqua dolore. Ea fugiat aliqua in dolore aliqua esse
          officia cupidatat. Excepteur ut quis ea elit commodo. Duis qui et sint
          nisi qui mollit. Duis tempor reprehenderit et exercitation magna.
          Laborum duis et anim elit incididunt cillum ullamco reprehenderit
          excepteur sint et. Excepteur nostrud magna cillum aute magna voluptate
          anim. In sit eu magna culpa et ullamco et ex nostrud voluptate mollit
          nulla. Sint ea id incididunt commodo elit culpa anim amet. Commodo
          consectetur velit eu ipsum excepteur ullamco consectetur nulla in
          dolore adipisicing voluptate. Lorem laboris anim exercitation occaecat
          anim officia.
        </article>
      </section>
    </PageCv>
  );
};

export default CurriculumVitae;

export const fragmentBio = graphql`
  fragment CVFragment on DatoCmsCv {
    title
    pp {
      title
      alt
      image: gatsbyImageData(placeholder: TRACED_SVG, width: 200)
    }
  }
`;
