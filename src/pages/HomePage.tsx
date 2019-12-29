import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";
import assets from "../assets";
import SocialMediaLinks from "../components/SocialMediaLinks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  font-size: 20px;
  min-height: 100vh;
  @media only screen and (max-device-width: 400px) {
    font-size: 16px;
  }
`;

const BioData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-device-width: 400px) {
    margin: 2em 0em 0em 0em;
  }
`;

const Avatar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid ${colorCodes.nightBlue};
  margin: 3rem 1rem 2rem 1rem;

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

  @media only screen and (min-width: 850px) {
    padding: 1rem 10em 1em 10em;
  }
`;

const HomePage: React.SFC<any> = (props: any) => {
  return (
    <PageContainer>
      <BioData>
        <Avatar src={assets.avatarImage} />
        <ShortIntro>
          Hi, I'm Vishnu Vardhan, a software engineer interested in everything
          about building scalable web apps.
          <br />
          <br />I like to solve competitive programming problems, visual arts
          and football (not always in that order though)
          <br />
          <br /> Scroll down to know more about me.
        </ShortIntro>
        <SocialMediaLinks></SocialMediaLinks>
        <hr style={{ borderBottom: "0px #eaeaea solid", width: "60%" }} />
      </BioData>
    </PageContainer>
  );
};

export default HomePage;
