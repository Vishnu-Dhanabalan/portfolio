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
  background-image: linear-gradient(
    to bottom,
    ${colorCodes.darkSlate},
    ${colorCodes.deepMatteGrey}
  );
  height: 100vh;
`;

const BioData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Avatar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid ${colorCodes.areYaYellow};
  margin: 0 auto;
  @media ${device.mobileL} {
    height: 200px;
    width: 200px;
  }
`;

const NameTag = styled.div`
  color: ${colorCodes.areYaYellow};
  font-size: 40px;
  margin: 0 auto;
  font-family: ReemKufiRegular;
  text-align: center;

  // max width 425px;
  @media ${device.mobileL} {
    font-size: 25px;
  }
`;

const ShortIntro = styled.div`
  color: ${colorCodes.silverFox};
  font-size: 30px;
  font-family: ReemKufiRegular;
  margin: 0 5rem;
  text-align: center;

  // max width 425px;
  @media ${device.mobileL} {
    margin: 0 2rem;
    font-size: 25px;
  }
`;

const HomePage: React.SFC<any> = props => {
  return (
    <MainContainer>
      <NavBar></NavBar>
      <BioData>
        <Avatar src={avatarImage} alt="" />
        <br />
        <NameTag>Vishnu Vardhan Dhanabalan</NameTag>
        <br />
        <ShortIntro>
          Hi there, I'm Vishnu Dhanabalan. I like coding{" "}
          <span style={{ fontSize: 20 }}>💻</span>, visual arts{" "}
          <span style={{ fontSize: 20 }}>📷</span> and football{" "}
          <span style={{ fontSize: 20 }}>⚽</span>, (not necessarily in that
          order)
        </ShortIntro>
        <br />
        <SocialMediaLinks></SocialMediaLinks>
      </BioData>
    </MainContainer>
  );
};

export default HomePage;
