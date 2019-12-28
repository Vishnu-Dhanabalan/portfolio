import * as React from "react";
import styled from "styled-components";
import colorCodes from "../styles/color-codes";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 10px;
  font-family: BitterRegular;
  color: ${colorCodes.deepMatteGrey};
  padding: 20px 0px 0px 0px;
  }
`;

const Footer: React.SFC<any> = (props: any) => {
  return (
    <Container>
      2019 Copyright © Vishnu Vardhan Dhanabalan. All rights reserved.
    </Container>
  );
};

export default Footer;
