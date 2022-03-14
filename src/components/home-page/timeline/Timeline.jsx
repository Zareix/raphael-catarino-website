import React, { useContext } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styled from "styled-components";
import { graphql } from "gatsby";
import { ReactSVG } from "react-svg";
import CmsDataContext from "../../utils/context/data-context";

import "react-vertical-timeline-component/style.min.css";

const TimelineSection = styled.section`
  max-width: 100vw;
  margin-top: 2.5rem;
  scroll-margin-top: 5rem;

  .vertical-timeline.vertical-timeline-custom-line::before {
    background-color: #c5c5c5;
  }

  .vertical-timeline-element-icon {
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      inset: 0;
      margin: 0;
      padding: 0.8rem;
    }
  }

  .vertical-timeline-element-date {
    padding-bottom: 0 !important;
  }

  @media (max-width: 1170px) {
    .vertical-timeline {
      max-width: 700px;
      padding: 0.5rem;

      &::before {
        left: 26px;
      }
    }

    .vertical-timeline-element-icon svg {
      padding: 0.5rem;
    }
  }
`;

const TimelineItemTitle = (props) => (
  <h3 className="text-lg font-semibold">{props.children}</h3>
);
const TimelineItemSubTitle = (props) => (
  <h4 className="text-base text-gray-600 dark:text-gray-300">
    {props.children}
  </h4>
);

const Timeline = () => {
  const { timeline } = useContext(CmsDataContext);

  const openInNewTab = (url) => window.open(url, "_blank").focus();

  return (
    <TimelineSection id="timeline">
      <h1 className="text-center text-3xl font-bold">{timeline.title}</h1>
      <h2 className="mb-8 w-4/5 text-center text-lg text-gray-600 dark:text-gray-400">
        {timeline.subtitle}
      </h2>
      <VerticalTimeline className="vertical-timeline-custom-line VerticalTimeline overflow-hidden">
        {timeline.elements.map(({ node: item }) => (
          <VerticalTimelineElement
            key={item.id}
            contentStyle={{
              borderTop: "4px solid " + item.color.rgb,
            }}
            contentArrowStyle={{ borderRight: "7px solid " + item.color.rgb }}
            date={item.date}
            iconStyle={{ background: item.color.rgb, color: "#fff" }}
            icon={<ReactSVG src={item.icon.url} wrapper="span" />}
            onTimelineElementClick={() => openInNewTab(item.externalLink)}
            iconOnClick={() => openInNewTab(item.externalLink)}
          >
            <TimelineItemTitle>{item.title}</TimelineItemTitle>
            <TimelineItemSubTitle className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </TimelineItemSubTitle>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineSection>
  );
};

export default Timeline;

export const fragmentTimeline = graphql`
  fragment Timeline on DatoCmsTimeline {
    id
    title
    subtitle
    externalLink
    date
    color {
      rgb
    }
    icon {
      url
    }
  }
`;
