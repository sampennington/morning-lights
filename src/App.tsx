import React from "react";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import ArtPage from "./Pages/Gallery";
import Home from "./Pages/Home";
import { SWRConfig } from "swr";
import axios from "axios";
import SliderMenu from "./components/SliderMenu/SliderMenu";
import { StyledApp } from "./App.styled";

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url, ...args) => {
          const result = await axios(url);
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
