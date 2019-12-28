import * as React from "react";
import styled from "styled-components";
import colorCodes from "../styles/color-codes";
import avatarImage from "../assets/my-pic.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMediaLinks from "../components/SocialMediaLinks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  font-size: 20px;

  @media only screen and (max-device-width: 400px) {
    font-size: 16px;
  }
`;

const BioData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media only screen and (max-device-width: 400px) {
    margin: 2em 0em 0em 0em;
  }
`;

const Avatar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid ${colorCodes.nightBlue};
  margin: 1rem 1rem;

  @media only screen and (max-device-width: 400px) {
    height: 200px;
    width: 200px;
  }
`;

const ShortIntro = styled.div`
  color: ${colorCodes.deepMatteGrey};
  font-family: BitterRegular;
  text-align: left;
  line-height: 22px;
  text-align: center;
  padding: 1rem 4em 1em 4em;
`;

const HomePage: React.SFC<any> = (props: any) => {
  return (
    <PageContainer>
      <Header showHome={false}></Header>
      <BioData>
        <Avatar src={avatarImage} />
        <ShortIntro>
          Hi, I'm Vishnu Vardhan, a software engineer interested in building
          scalable web apps for all platforms.
          <br />
          <br />I am currently working in Robert Bosch India, as a full-stack
          senior software engineer, on a project that helps streamlining the
          workflow from designing UI/UX designs to deployable app code.
          <br />
          <br />
          Earlier, I was working at Euphony Inc., a startup that builds emotion
          based Text-To-Speech engine and at The MathWorks Inc., as a DSP
          Software Engineer and as an intern, respectively.
          <br />
          <br />I like to solve competitive programming problems, visual arts
          and football (not always in that order though)
        </ShortIntro>
        <SocialMediaLinks></SocialMediaLinks>
        <Footer></Footer>
      </BioData>
    </PageContainer>
  );
};

export default HomePage;
