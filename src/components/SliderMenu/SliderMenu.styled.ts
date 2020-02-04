import styled from "styled-components";
import { mqMediumUp } from "../../utils/mq";

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

export { StyledSliderMenu, StyledBurger };
