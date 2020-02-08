import React from "react";
import styled from "styled-components";
import { mqLargeUp, mqMediumUp, mqSmallUp } from "../../utils/mq";

const StyledImage = styled.img`
  width: 100vw;
  opacity: 0.6;
  transition: opacity 0.5s ease;
  filter: grayscale(100%);
  object-fit: cover;
  height: ${100 / 3}vh;

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
`;

type Props = {
  img: {
    thumbnail_src: string;
  };
};

const Image = ({ img }: Props) => {
  console.log({ img });
  return <StyledImage src={img.thumbnail_src} />;
};

export default Image;
