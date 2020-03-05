import React from "react";
import styled from "styled-components";
import logo from "../../resources/moon.jpg";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import { mqMediumUp } from "../../utils/mq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 135px;
  // position: fixed;
  width: 100%;
  z-index: 2;
`;

const SocialMedia = styled.div`
  display: flex;
  width: 200px;
  font-size: 26px;
  flex-basis: 180px;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.img``;

const Spacer = styled.div`
  flex-basis: 180px;
  display: none;
  ${mqMediumUp(`
    display: block;
  `)}
`;

const SocialLink = styled(FontAwesomeIcon)``;

const Header = () => (
  <StyledHeader>
    <Spacer />
    <Logo src={logo} width={110} alt="" />
    <SocialMedia>
      <a href="https://www.facebook.com/inthemorninglights/">
        <SocialLink icon={faFacebookF} color="white" />
      </a>

      <a href="https://www.instagram.com/inthemorninglights/">
        <FontAwesomeIcon icon={faInstagram} color="white" />
      </a>
      <FontAwesomeIcon icon={faYoutube} color="white" />
      <FontAwesomeIcon icon={faSpotify} color="white" />
    </SocialMedia>

    {/* <Loading /> */}
  </StyledHeader>
);

export default Header;
