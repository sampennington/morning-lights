import React from "react";
import styled from "styled-components";
import Loading from "./components/Loading/Loading";
import { colours } from "./constants/colours";

const StyledApp = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colours.pink};
`;

const App = () => {
  return (
    <StyledApp>
      <Loading />
    </StyledApp>
  );
};

export default App;
