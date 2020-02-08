import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: black;
  overflow-y: scroll;

  > div {
    display: flex;
    // flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1 1 0;
    background-color: black;
    // overflow-y: scroll;
  }
`;

export { StyledApp };
