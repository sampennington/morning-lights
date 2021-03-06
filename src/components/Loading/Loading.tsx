import React from "react";
import styled, { keyframes } from "styled-components";
import { colours } from "../../constants/colours";

const StyledLogo = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  align-self: center;
`;

const StyledBars = styled.div`
  position: absolute;
  left: 0;
  top: 12px;
  width: 40px;
`;

const widthAnimation = keyframes`
  from {
    transform: skew(-10deg) scaleX(0.2);
  }
  to {
    transform: skew(-10deg) scaleX(1);
  }
`;

const StyledMoon = styled.div`
  position: absolute;
  right: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: inset 0px 0px ${colours.white},
    inset 0px 15px 0px 0px ${colours.white};
  transform: rotate(110deg);
  opacity: 1;
`;

const StyledBar = styled.div<{ width: number; delay: number }>`
  animation: ${widthAnimation} 1s alternate infinite;
  display: block;
  height: 8px;
  margin: 4px;
  transform: skew(-10deg);
  background-color: ${colours.white};
  transform-origin: left;
  ${({ width, delay }) => `
    animation-delay: ${delay}s;
    width: ${width}%;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  width: 100%;
  min-height: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <Wrapper>
    <StyledLogo>
      <StyledBars>
        <StyledBar width={60} delay={0} />
        <StyledBar width={100} delay={0.2} />
        <StyledBar width={70} delay={0.4} />
      </StyledBars>
      <StyledMoon />
    </StyledLogo>
  </Wrapper>
);

export default Loading;
