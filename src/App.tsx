import React from "react";
import { Router } from "@reach/router";
import ArtPage from "./Pages/Gallery";
// import Home from "./Pages/Home";
import { StyledApp } from "./App.styled";

const App = () => {
  return (
    <StyledApp>
      <Router id="">
        {/* <Home path="/" /> */}
        <ArtPage path="/" />
      </Router>
    </StyledApp>
  );
};

export default App;
