import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background: black;
  overflow-y: hidden;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(67, 67, 67, 1) 100%
  );

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1 1 0;
  }
`;

export { StyledApp };
