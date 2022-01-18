import React, { useContext } from "react"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import styled from "styled-components"
import { graphql } from "gatsby"
import { ReactSVG } from "react-svg"

import "react-vertical-timeline-component/style.min.css"
import CmsDataContext from "../../utils/context/data-context"

const TimelineSection = styled.section`
  overflow: hidden;
  max-width: 100vw;
  margin-top: 2.5rem;

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

  @media (max-width: 1170px) {
    .vertical-timeline {
      max-width: 700px;
    }

    .vertical-timeline-element-icon svg {
      padding: 0.5rem;
    }
  }
`

const TimelineItemTitle = (props) => <h3 className="text-lg font-semibold">{props.children}</h3>
const TimelineItemSubTitle = (props) => (
  <h4 className="text-base text-gray-600 dark:text-gray-300">{props.children}</h4>
)

const Timeline = () => {
  const { timeline } = useContext(CmsDataContext)

  const openInNewTab = (url) => window.open(url, "_blank").focus()

  return (
    <TimelineSection id="timeline">
      <h1 className="text-3xl font-bold text-center">{timeline.title}</h1>
      <h2 className="text-lg text-center text-gray-600 dark:text-gray-400 w-4/5 mb-8">
        {timeline.subtitle}
      </h2>
      <VerticalTimeline className="vertical-timeline-custom-line VerticalTimeline">
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
  )
}

export default Timeline

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
`
