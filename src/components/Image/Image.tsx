import React from "react";
import styled from "styled-components";
import { mqLargeUp, mqMediumUp, mqSmallUp } from "../../utils/mq";

const StyledImage = styled.img`
  ${({
    col,
    row,
    slideLeft
  }: {
    col: number;
    row: number;
    slideLeft: boolean;
  }) => `
    width: 100vw;
    opacity: 0.6;
    transition: all 0.8s ease;
    filter: grayscale(100%);
    cursor: pointer;
    object-fit: cover;
    height: ${100 / 3}vh;
    grid-row: ${row} / ${row};
    grid-column: ${col} / ${col};
    position: relative;
    right: ${slideLeft ? 100 : 0}vw;

    ${mqSmallUp(`
      height: ${100 / 3}vh;
      width: 50vw;
    `)}

    ${mqMediumUp(`
      height: ${100 / 3}vh;
      width:  ${100 / 3}vw;
    `)}

    ${mqLargeUp(`
      height: ${100 / 3}vh;
      width: 20vw;
    `)}

    :hover {
      opacity: 1;
      filter: grayscale(0%);
    }
 `}
`;

type Props = {
  img: string;
  onClick: () => void;
  col: number;
  row: number;
  slideLeft?: boolean;
};

const Image = ({ img, onClick, col, row, slideLeft = false }: Props) => {
  console.log({ img });
  return (
    <StyledImage
      src={img}
      onClick={onClick}
      col={col}
      row={row}
      slideLeft={slideLeft}
    />
  );
};

export default Image;
