import React from "react";
import styled from "styled-components";
import { colours } from "../../constants/colours";
import logo from "../../resources/morning-lights.jpg";
import Loading from "../Loading/Loading";
import { mqMediumUp } from "../../utils/mq";

const StyledHeader = styled.div`
  display: none;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  width; 100%;
  color: ${colours.orange};
  font-weight: 700;
  font-size: 20px;
  ${mqMediumUp(`
    display: flex;

  `)}
`;

const StyledNavItem = styled.div`
  cursor: pointer;
`;

const Logo = styled.img``;

const Header = () => (
  <StyledHeader>
    <Logo src={logo} width={150}></Logo>
    <StyledNavItem>Home</StyledNavItem>
    <StyledNavItem>Music</StyledNavItem>
    <StyledNavItem>Art</StyledNavItem>
    <StyledNavItem>Contact</StyledNavItem>
    <Loading />
  </StyledHeader>
);

export default Header;
