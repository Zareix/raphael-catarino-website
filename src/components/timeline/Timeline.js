import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
import "./custom.css"

import { MdSchool, MdWork } from "react-icons/md"

const Title = (props) => <h3 className="text-xl font-semibold">{props.children}</h3>
const SubTitle = (props) => <h4 className="text-lg text-gray-600">{props.children}</h4>

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#fff",
            color: "#000",
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <Title className="vertical-timeline-element-title">
            Baccalauréat général scientifique
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            Lycée La Rochefoucauld
          </SubTitle>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#fff",
            color: "#000",
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 à 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <Title className="vertical-timeline-element-title">
            DUT Informatique
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            IUT de Paris Rives De Seine (Anciennement Descartes)
          </SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#fff",
            color: "#000",
            borderTop: "4px solid rgb(0, 169, 194)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0, 169, 194)" }}
          date="Avril 2021 à Aout 2021"
          iconStyle={{ background: "rgb(0, 169, 194)", color: "#fff" }}
          icon={<MdWork />}
        >
          <Title className="vertical-timeline-element-title">
            Développeur testing et automatisation
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">Keolis</SubTitle>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#fff",
            color: "#000",
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 à 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <Title className="vertical-timeline-element-title">
            Ecole d'ingénieur informatique
          </Title>
          <SubTitle className="vertical-timeline-element-subtitle">
            EFREI, ISEP ou ESIEE
          </SubTitle>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
