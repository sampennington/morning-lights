import React from "react";
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import { StyledApp } from "./App.styled";
import { Header } from "./components";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Router id="">
        <Home path="/" />
      </Router>
    </StyledApp>
  );
};

export default App;
