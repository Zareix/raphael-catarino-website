import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import styled from "styled-components"
import { graphql } from "gatsby"
import { ReactSVG } from "react-svg"

import "react-vertical-timeline-component/style.min.css"
import "./customTimeline.css"

const TimelineSection = styled.section`
  overflow: hidden;
  max-width: 100vw;
`

const Title = (props) => (
  <h3 className="text-lg font-semibold">{props.children}</h3>
)
const SubTitle = (props) => (
  <h4 className="text-base text-gray-600 dark:text-gray-300">
    {props.children}
  </h4>
)

const Timeline = ({ data }) => {
  const timelineItems = data.edges

  const openInNewTab = (url) => window.open(url, "_blank").focus()

  return (
    <TimelineSection id="timeline">
      <VerticalTimeline className="vertical-timeline-custom-line VerticalTimeline">
        {timelineItems.map(({ node: item }) => (
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
            <Title>{item.title}</Title>
            <SubTitle className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </SubTitle>
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
