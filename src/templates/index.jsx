import React, { useEffect, useState } from "react";

import "../styles/index.css";

import styled from "styled-components";
import { graphql, navigate } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Helmet } from "react-helmet";

import Hero from "../components/home-page/hero/Hero";
import Layout from "../components/home-page/layout/Layout";
import Biographie from "../components/home-page/biographie/Biographie";
import Competences from "../components/home-page/competences/Competences";
import Projets from "../components/home-page/projets/Projets";
import BeforeContent from "../components/home-page/BeforeContent";
import Timeline from "../components/home-page/timeline/Timeline";
import useScrolled from "../components/hooks/use-scroll";
import Loading from "../components/loading/Loading";
import useScrollEvent from "../components/hooks/use-scroll-event";
import CmsDataContext from "../components/utils/context/data-context";
import { CSSTransition } from "react-transition-group";

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  z-index: 1;
`;
const IndexPage = ({ data, location }) => {
  const { scrolled } = useScrolled();
  const { disableScroll, enableScroll } = useScrollEvent();
  const [isLoading, setIsLoading] = useState(true);

  const cmsData = {
    pageLocation: location,
    biographie: data.biography,
    hero: data.home,
    timeline: {
      elements: data.timeline.edges,
      title: data.home.timelineTitle,
      subtitle: data.home.timelineSubtitle,
    },
    competences: {
      categories: data.competences.edges,
      title: data.home.compTitle,
      subtitle: data.home.compSubtitle,
    },
    projects: {
      elements: data.projects.edges,
      title: data.home.projectsTitle,
      subtitle: data.home.projectsSubtitle,
      defaultShownItems: data.home.projectDefaultShown,
      stepShowMore: data.home.projectsShowMoreStep,
      showMoreLabel: data.home.projectsLabelShowMoreBtn,
    },
    layout: {
      navbar: data.navbar,
      footer: {
        message: data.footer.footerMessage,
      },
      skipToMain: data.layout.skipToMainButtonText,
    },
    contact: data.contact,
    loading: {
      text: data.home.loadingText,
    },
  };

  useEffect(() => {
    if (location.pathname === "/") {
      if (navigator.language.startsWith("en")) navigate("en/");
      else navigate("fr/");
    }

    disableScroll();

    setTimeout(() => {
      setIsLoading(false);
      enableScroll();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <CmsDataContext.Provider value={cmsData}>
      <Helmet
        htmlAttributes={{
          lang: data.settings.locale,
        }}
      />
      <HelmetDatoCms
        favicon={data.settings.faviconMetaTags}
        seo={data.home.seoMetaTags}
      />
      <CSSTransition
        in={isLoading}
        timeout={1000}
        unmountOnExit
        classNames="slideFromTop"
      >
        <Loading />
      </CSSTransition>
      <Layout>
        <Main id="main">
          <Hero />
          <section id="bio" className="scroll-mt-60">
            <CSSTransition
              in={scrolled}
              timeout={750}
              unmountOnExit
              classNames="fade"
            >
              <Biographie />
            </CSSTransition>
            <CSSTransition
              in={!scrolled}
              timeout={750}
              unmountOnExit
              classNames="fade"
            >
              <BeforeContent />
            </CSSTransition>
            {!scrolled && <div className="empty-content" />}
          </section>
          <Timeline />
          <Competences />
          <Projets />
        </Main>
      </Layout>
    </CmsDataContext.Provider>
  );
};

export default IndexPage;

export const queryIndex = graphql`
  query Index($locale: String!) {
    home: datoCmsHomePage(locale: { eq: $locale }) {
      loadingText
      presTitle
      presSubtitle
      timelineTitle
      timelineSubtitle
      compTitle
      compSubtitle
      projectsTitle
      projectsSubtitle
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      projectDefaultShown
      projectsShowMoreStep
      projectsLabelShowMoreBtn
    }

    settings: datoCmsSite(locale: { eq: $locale }) {
      locale
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }

    biography: datoCmsBiography(locale: { eq: $locale }) {
      ...Bio
    }

    competences: allDatoCmsCompetence(
      filter: { locale: { eq: $locale } }
      sort: { fields: position }
    ) {
      edges {
        node {
          ...Comp
        }
      }
    }

    timeline: allDatoCmsTimeline(
      filter: { locale: { eq: $locale } }
      sort: { fields: position }
    ) {
      edges {
        node {
          ...Timeline
        }
      }
    }

    projects: allDatoCmsProject(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          ...Project
        }
      }
    }

    layout: datoCmsLayout(locale: { eq: $locale }) {
      ...SkipToMain
    }

    navbar: datoCmsNavbar(locale: { eq: $locale }) {
      ...Navbar
    }

    footer: datoCmsFooter(locale: { eq: $locale }) {
      ...Footer
    }

    contact: datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }
  }
`;
