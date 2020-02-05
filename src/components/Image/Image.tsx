import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.6;
  transition: opacity 0.5s ease;
  margin-bottom: 5px;

  :hover {
    opacity: 1;
  }
`;

type Props = {
  img: {
    thumbnail_src: string;
  };
};

const Image = ({ img }: Props) => {
  return <StyledImage src={img.thumbnail_src} />;
};

export default Image;
