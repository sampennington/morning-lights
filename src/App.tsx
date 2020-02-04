import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { push as Menu } from "react-burger-menu";
import logo from "./resources/morning-lights.jpg";
import { mqMediumUp } from "./utils/mq";
import { Router } from "@reach/router";
import ArtPage from "./Pages/Gallery";
import Home from "./Pages/Home";
import { SWRConfig } from "swr";
import axios from "axios";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  height: 100%;
  padding: 5px;
`;

const StyledSliderMenu = styled.div`
  height: 120px;
  position: relative;
  margin-left: auto;
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
      right
    ></Menu>
  </StyledSliderMenu>
);

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          console.log({ args });
          const result = await axios(args[0]);

          return result.data;
        }
      }}
    >
      <StyledApp id="outer-container">
        <SliderMenu />
        <main id="page-wrap">
          <Header />
          <Router>
            <Home path="/" />
            <ArtPage path="/gallery" />
          </Router>
        </main>
      </StyledApp>
    </SWRConfig>
  );
};

export default App;
