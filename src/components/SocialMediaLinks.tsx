import React from "react";
import styled from "styled-components";

import Icon from "./Icons";
import colors from "../styles/color-codes";
import { device } from "../styles/breakpoints";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 20px 0;
  & svg {
    height: 45px;
    width: 45px;
    fill: ${colors.deepMatteGrey};

    &:hover {
      fill: ${colors.sandTan};
    }
  }

  // max width 425px
  @media ${device.mobileL} {
    & svg {
      height: 20px;
      width: 20px;
      fill: ${colors.deepMatteGrey};

      // transistion: 3s;
      &:hover {
        fill: ${colors.sandTan};
      }
    }
  }
`;

const LinkAnchor = styled.a`
  padding: 0 1rem 0 1rem;
`;

const SocialMediaLinks: React.SFC<any> = props => {
  return (
    <MainContainer>
      <LinkAnchor
        href="https://www.facebook.com/worryfreedude"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon iconIdentifier="FACEBOOK" />
      </LinkAnchor>
      <LinkAnchor
        href="https://www.linkedin.com/in/vishnudhanabalan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon iconIdentifier="LINKEDIN" />
      </LinkAnchor>
      <LinkAnchor
        href="https://github.com/Vishnu-Dhanabalan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon iconIdentifier="GITHUB" />
      </LinkAnchor>
      <LinkAnchor
        href="https://www.instagram.com/the_visuals_by_vishnuvardhan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon iconIdentifier="INSTAGRAM" />
      </LinkAnchor>
    </MainContainer>
  );
};

export default SocialMediaLinks;
