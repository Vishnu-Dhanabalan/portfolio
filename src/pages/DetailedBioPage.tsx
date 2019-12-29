import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";
import { blinkingEffect } from "../styles/keyframes";

import assets from "../assets";
import DetailedBioComponent, {
  DetailedBioProps
} from "../components/DetailedBioComponent";

const WORK_DATA: DetailedBioProps[] = [
  {
    logo: assets.boschLogo,
    topic: "Robert Bosch India",
    position: "Senior Software Engineer",
    location: "Coimbatore, India",
    description: (
      <div>
        I've been working as a full-stack engineer on building the microservices
        based web-app, that helps streamlining the workflow of designing UI/UX,
        configuring its prototypes and exporting it to deployable app code for
        various targets. <br />
        <br /> I've been mainly involved with ReactJS, ElectronJS, NodeJS,
        TypeScript, MongoDB and MySQL. I also take care of DevOPSing our team's
        projects in Azure.
      </div>
    ),
    timeline: "Dec 2018 to Present"
  },
  {
    logo: assets.euphonyIncLogo,
    topic: "Euphony Inc.,",
    position: "DSP Software Engineer",
    location: "Syracuse, USA",
    description: (
      <div>
        Euphony Inc., is a startup that builds emotion based Text-To-Speech
        system. <br />
        <br />I worked in building various internal tools for linguists that
        helps as a one stop shop from processing voice samples to building
        synthetic voice models that can be readily used in TTS engines. <br />
        <br />
        C++, Python and MATLAB was the main artillery I had.
      </div>
    ),
    timeline: "April 2016 to May 2018"
  },
  {
    logo: assets.mathworksIncLogo,
    topic: "The MathWorks Inc.,",
    position: "DSP System Toolbox Development Intern",
    location: "Natick, USA",
    description: (
      <div>
        I worked in the beta release of{" "}
        <a
          href="https://www.mathworks.com/products/audio.html"
          style={{
            color: colorCodes.sandTan,
            fontStyle: "italic"
          }}
          target="_blank"
        >
          Audio System Toolbox™
        </a>
        , writing System Objects™ for various guitar audio effects. <br />
        <br />
        I've also had the opportunity to conduct usability sessions that really
        helped when thinking how a product should be designed with the user on
        the center. I was fortunate to have worked with vastly experienced and
        talented peers.
        <br />
        <br />I was coding totally in MATLAB and C/C++.
      </div>
    ),
    timeline: "May 2015 to Sep 2015"
  }
];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media only screen and (max-width: 850px) {
    font-size: 16px;
  }

  // DUMMY
  background: ${colorCodes.midnightBlue};
  color: ${colorCodes.silverFox};
`;

const SectionTitle = styled.div`
  margin: 0 auto;
  padding: 20px 20px 20px 20px;
  font-size: 35px;
  color: ${colorCodes.silverFox};
`;

const Blinker = styled.span`
  color: ${colorCodes.areYaYellow};
  animation: 1s ${blinkingEffect} step-end infinite;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  color: ${colorCodes.deepMatteGrey};

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  }
`;

const DetailedBioPage: React.SFC<any> = (props: any) => {
  return (
    <PageContainer>
      <SectionTitle>
        my-career:so-far vishnu$<Blinker> ▌</Blinker>
      </SectionTitle>
      <WorkContainer>
        {WORK_DATA.map((each: DetailedBioProps) => {
          return <DetailedBioComponent key={each.timeline} {...each} />;
        })}
      </WorkContainer>
    </PageContainer>
  );
};

export default DetailedBioPage;
