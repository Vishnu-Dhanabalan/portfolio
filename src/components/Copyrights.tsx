import * as React from "react";
import styled from "styled-components";

import colorCodes from "../styles/color-codes";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  list-style: none;
  width: 100%;
  position: fixed;
  bottom: 5px;

  font-size: 12px;
  font-family: BitterRegular;
  color: ${colorCodes.deepMatteGrey};
`;

const Copyrights: React.SFC<any> = (props: any) => {
  return (
    <Container>
      2019 Copyrights © Vishnu Vardhan Dhanabalan. All rights reserved.
    </Container>
  );
};

export default Copyrights;
