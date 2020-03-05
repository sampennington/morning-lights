import React from "react";
import { push as Menu } from "react-burger-menu";
// import logo from "../../resources/morning-lights.jpg";
import { StyledSliderMenu } from "./SliderMenu.styled";

const SliderMenu = () => (
  <StyledSliderMenu>
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      // customBurgerIcon={<StyledBurger src={logo} />}
      right
    ></Menu>
  </StyledSliderMenu>
);

export default SliderMenu;
