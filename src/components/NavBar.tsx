import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colorCodes from "../styles/color-codes";

const Container = styled.ul`
  display: flex;
  flex-direction: row;

  list-style: none;
  width: 100%;
  position: fixed;
  top: 0px;
  li:first-child {
    margin-right: auto;
  }
`;

const NavElements = styled.li`
  font-family: BitterBold;
  a {
    display: block;
    color: ${colorCodes.deepMatteGrey};
    text-decoration: none;
    padding: 10px;
    font-size: 20px;

    :hover {
      color: ${colorCodes.sandTan};
    }
  }
`;

const NavBar: React.SFC<any> = (props: any) => {
  return (
    <Container>
      <NavElements>
        <Link to="/">Home</Link>
      </NavElements>
      <NavElements>
        <Link to="/work">Work</Link>
      </NavElements>
      <NavElements>
        <Link to="/more">More</Link>
      </NavElements>
    </Container>
  );
};

export default NavBar;
