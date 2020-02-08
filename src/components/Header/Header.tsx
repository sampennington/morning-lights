import React from "react";
import styled from "styled-components";
import { colours } from "../../constants/colours";
import logo from "../../resources/morning-lights.jpg";
import Loading from "../Loading/Loading";
import { mqMediumUp } from "../../utils/mq";
import { Link } from "@reach/router";

const StyledHeader = styled.div`
  // display: none;
  // padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  width; 100%;
  font-weight: 700;
  font-size: 24px;3
  ${mqMediumUp(`
    display: flex;
  `)}

  &:visited {
  }
`;

const StyledNavItem = styled(Link)`
  cursor: pointer;
  color: ${colours.white};
`;

const Logo = styled.img``;

const Header = () => (
  <StyledHeader>
    <Logo src={logo} width={150}></Logo>
    <StyledNavItem to="/">Home</StyledNavItem>
    <StyledNavItem to="/music">Music</StyledNavItem>
    <StyledNavItem to="/gallery">Gallery</StyledNavItem>
    <StyledNavItem to="/contact">Contact</StyledNavItem>
    {/* <Loading /> */}
  </StyledHeader>
);

export default Header;
