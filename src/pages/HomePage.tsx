import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";
import { device } from "../styles/breakpoints";
import avatarImage from "../assets/my-pic.jpg";
import SocialMediaLinks from "../components/SocialMediaLinks";
import NavBar from "../components/NavBar";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F5F5F5
  height: 100vh;

  @media ${device.mobileL} {
   height: 100%;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10%;
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    margin-top: 25%;
  }
`;

const BioData = styled.div`
  margin: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Avatar = styled.img`
  height: 300px;
  border-radius: 50%;
  border: 3px solid ${colorCodes.nightBlue};
  margin: 0 auto;
  @media ${device.mobileL} {
    height: 250px;
    width: 250px;
  }
`;

const ShortIntro = styled.div`
  color: ${colorCodes.deepMatteGrey};
  font-size: 20px;
  font-family: BitterRegular;
  text-align: left;

  // max width 425px;
  @media ${device.mobileL} {
    margin: 0 2rem;
    font-size: 15px;
  }
`;

const HomePage: React.SFC<any> = props => {
  return (
    <MainContainer>
      <NavBar></NavBar>
      <MainContent>
        <Avatar src={avatarImage} alt="" />
        <BioData>
          <ShortIntro>
            Hi, I'm Vishnu Vardhan, a software engineer interested in building
            scalable web apps for all platforms.
            <br />
            <br />I am currently working in Robert Bosch India, working as a
            full-stack senior software engineer, on a project that helps
            streamlining the workflow from designing UI/UX designs to deployable
            app code.
            <br />
            <br />
            Prior to this, I was working at a startup and at The MathWorks Inc.,
            as DSP Software Engineer.
            <br />
            <br />I like to solve competitive programming problems, visual arts
            and football (not necessarily in that order though)
          </ShortIntro>
          <br />
          <br />
          <SocialMediaLinks></SocialMediaLinks>
        </BioData>
      </MainContent>
    </MainContainer>
  );
};

export default HomePage;
