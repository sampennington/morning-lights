import React from "react";
import styled from "styled-components";
import { colours } from "./constants/colours";
import Header from "./components/Header/Header";
import Routes from "./Routes";
import { push as Menu } from "react-burger-menu";
import logo from "./resources/morning-lights.jpg";
import { mqMediumUp } from "./utils/mq";

const StyledApp = styled.div`
  background-color: ${colours.pink};
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  height: 100%;
  padding: 5px;
`;

const StyledSliderMenu = styled.div`
  height: 120px;
  position: relative;
  ${mqMediumUp(`
    display: none;
  `)}
`;

const StyledBurger = styled.img`
  max-width: 140px;
  padding: 10px;
`;

const SliderMenu = () => (
  <StyledSliderMenu>
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      customBurgerIcon={<StyledBurger src={logo} />}
    ></Menu>
  </StyledSliderMenu>
);

const App = () => {
  return (
    <>
      <StyledApp id="outer-container">
        <SliderMenu />
        <main id="page-wrap">
          <Header />
          <Routes />
        </main>
      </StyledApp>
    </>
  );
};

export default App;
