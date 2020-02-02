import React from "react";
import styled from "styled-components";
import Loading from "./components/Loading/Loading";

const StyledApp = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <StyledApp>
      <Loading />
    </StyledApp>
  );
};

export default App;
