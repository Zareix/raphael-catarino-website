import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import styled from "styled-components"
import { FormattedMessage } from "react-intl"

import "react-vertical-timeline-component/style.min.css"
import "./customTimeline.css"

import { MdSchool, MdWork } from "react-icons/md"

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

const Timeline = () => {
  const openInNewTab = (url) => window.open(url, "_blank").focus()

  return (
    <TimelineSection id="timeline">
      <VerticalTimeline className="vertical-timeline-custom-line VerticalTimeline">
        <VerticalTimelineElement
          contentStyle={{
            borderTop: "4px solid rgb(222, 0, 38)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(222, 0, 38)" }}
          date="2021 à 2024"
          iconStyle={{ background: "rgb(222, 0, 38)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() =>
            openInNewTab("https://particuliers.societegenerale.fr/")
          }
          iconOnClick={() =>
            openInNewTab("https://particuliers.societegenerale.fr/")
          }
        >
          <Title>
            <FormattedMessage id="timelineSGTitle" />
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            <FormattedMessage id="timelineSGSubtitle" />
          </SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 à 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
          onTimelineElementClick={() => openInNewTab("https://www.efrei.fr")}
          iconOnClick={() => openInNewTab("https://www.efrei.fr")}
        >
          <Title>
            <FormattedMessage id="timelineEFREITitle" />
          </Title>
          <SubTitle>
            <FormattedMessage id="timelineEFREISubtitle" />
          </SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            borderTop: "4px solid rgb(0, 169, 194)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0, 169, 194)" }}
          date="Avril à août 2021"
          iconStyle={{ background: "rgb(0, 169, 194)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() => openInNewTab("https://www.keolis.com")}
          iconOnClick={() => openInNewTab("https://www.keolis.com")}
        >
          <Title className="vertical-timeline-element-title">
            <FormattedMessage id="timelineKeolisTitle" />
          </Title>
          <SubTitle>
            <FormattedMessage id="timelineKeolisSubtitle" />
          </SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 à 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
          onTimelineElementClick={() =>
            openInNewTab("https://iutparis-seine.u-paris.fr/")
          }
          iconOnClick={() => openInNewTab("https://iutparis-seine.u-paris.fr/")}
        >
          <Title className="vertical-timeline-element-title">
            <FormattedMessage id="timelineIUTTitle" />
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            <FormattedMessage id="timelineIUTSubtitle" />
          </SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
          onTimelineElementClick={() => openInNewTab("https://laroche.org/")}
          iconOnClick={() => openInNewTab("https://laroche.org/")}
        >
          <Title className="vertical-timeline-element-title">
            <FormattedMessage id="timelineBacTitle" />
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            <FormattedMessage id="timelineBacSubtitle" />
          </SubTitle>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineSection>
  )
}

export default Timeline
