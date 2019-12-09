import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";
import { device } from "../styles/breakpoints";
import avatarImage from "../assets/my-pic.jpg";

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
`;

const Avatar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid ${colorCodes.areYaYellow};
  margin: 0 auto;
`;

const NameTag = styled.div`
  color: ${colorCodes.areYaYellow};
  font-size: 40px;
  margin: 0 auto;
  font-family: ReemKufiRegular;
  text-align: center;
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
  }
`;

const HomePage: React.SFC<any> = props => {
  return (
    <MainContainer>
      <BioData>
        <Avatar src={avatarImage} alt="" />
        <br />
        <NameTag>Vishnu Vardhan Dhanabalan</NameTag>
        <br />
        <ShortIntro>
          Hi there, I'm Vishnu Dhanabalan. I like coding 💻, visual arts 📷 and
          football ⚽, not necessarily in that order.
        </ShortIntro>
      </BioData>
    </MainContainer>
  );
};

export default HomePage;
