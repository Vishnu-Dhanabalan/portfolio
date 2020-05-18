import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../styles/breakpoints";
import colorCodes from "../styles/color-codes";

const Container = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  font-size: 20px;
  font-family: BitterRegular;
  background: #eaeaea;

  & a {
    color: ${colorCodes.deepMatteGrey};
    padding: 10px;
    text-decoration: none;
    :hover {
      color: ${colorCodes.sandTan};
    }
  }

  @media ${device.laptop} {
    font-size: 15px;
  }
`;

interface HeaderProps {
  showHome: boolean;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Container>
      {props.showHome ? <Link to="/">Home</Link> : null}
      {/**
       * Will add blog and photography links once they are implemented.
       */}
      {/* <Link to="/blog">Blog</Link>
      <Link to="/photography">Photography</Link> */}
    </Container>
  );
};

export default Header;
