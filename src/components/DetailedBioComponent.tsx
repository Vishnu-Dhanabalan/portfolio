import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 33.33%;
  padding: 30px 30px;
  align-items: center;
  text-align: center;
  color: ${colorCodes.silverFox};
`;

const Logo = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: 2px solid silver;
`;

const Title = styled.h2`
  font-size: 25px;
  margin: 5px 0px 10px 0px;
`;

const Position = styled.h4``;

const Duration = styled(Title)`
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.8;
`;

const Location = styled.h4`
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.8;
`;

const Description = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 3% 20%;
  line-height: 20px;
`;

export interface DetailedBioProps {
  logo: any;
  topic: string;
  position: string;
  description: any;
  timeline: string;
  location?: string;
  overridingStyle?: any; // must be React compatible inline CSS object.
}

const DetailedBioComponent: React.SFC<DetailedBioProps> = (
  props: DetailedBioProps
) => {
  return (
    <Container style={props.overridingStyle}>
      <Logo src={props.logo}></Logo>
      <Title>{props.topic}</Title>
      <Position>{props.position}</Position>
      <Location>{props.location}</Location>
      <Duration>{props.timeline}</Duration>
      <Description>{props.description}</Description>
    </Container>
  );
};

export default DetailedBioComponent;
