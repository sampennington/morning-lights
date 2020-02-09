import React, { useState } from "react";
import styled from "styled-components";
import { instagramImages } from "../constants/endpoints";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import Image from "../components/Image/Image";
import { mqMediumUp, mqSmallUp, mqLargeUp } from "../utils/mq";
import { InstagramImagesResponse } from "../types/ApiResponses";
import { a, d, e, f, g, h, i } from "../resources";

const StyledImages = styled.div`
  display: grid;
  column-gap: 0px;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);

  ${mqSmallUp(`
    grid-template-columns: repeat(2, 1fr);  
  `)}

  ${mqMediumUp(`
    grid-template-columns: repeat(3, 1fr);  
  `)}

  ${mqLargeUp(`
    grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: repeat(3, 1fr);  
  `)}

  // grid-auto-flow: column;
`;

const Column = styled.div<{ slideOut?: boolean; col: number; row: number }>`
  ${({ col, row, slideOut }) => `
    display: grid;
    grid-row: ${1} / ${3};
    grid-column: ${col} / ${col};
    position: relative;
    top: ${slideOut ? -100 : 0}vw;
    transition: top 0.5s ease;
    z-index: 3;
  `}
`;

const ShowsWrapper = styled.div<{ slideOut?: boolean }>`
  ${({ slideOut }) => `
    position: relative;
    bottom: ${slideOut ? 0 : -100}vh;
    grid-column: 2 / 6;
    grid-row: 1 / 3;
    color: white;
    padding: 50px;
    z-index: 1;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    transition: bottom 0.5s ease;
    `}
`;

const Gallery = ({ path }: { path: string }) => {
  const [slideOut, setSlideout] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);

  const doStuff = () => {
    setSlideout(!slideOut);
  };

  // const slideLeftFunc = () => {
  //   setSlideLeft(!slideLeft);
  // };

  return (
    <>
      <StyledImages>
        <Column col={1} row={2}>
          <Image
            img={a}
            onClick={doStuff}
            col={1}
            row={1}
            slideLeft={slideLeft}
          />
          <Image img={e} onClick={doStuff} col={1} row={2} />
          <Image img={f} onClick={doStuff} col={1} row={3} />
        </Column>

        <Column col={2} row={2} slideOut={slideOut}>
          <Image
            img={h}
            onClick={doStuff}
            col={2}
            row={1}
            slideLeft={slideLeft}
          />
          <Image img={h} onClick={doStuff} col={2} row={2} />
          <Image img={i} onClick={doStuff} col={2} row={3} />
        </Column>

        <Column col={3} row={2} slideOut={slideOut}>
          <Image
            img={e}
            onClick={doStuff}
            col={3}
            row={1}
            slideLeft={slideLeft}
          />
          <Image img={f} onClick={doStuff} col={3} row={2} />
          <Image img={h} onClick={doStuff} col={3} row={3} />
        </Column>

        <Column col={4} row={2} slideOut={slideOut}>
          <Image
            img={g}
            onClick={doStuff}
            col={4}
            row={1}
            slideLeft={slideLeft}
          />
          <Image img={i} onClick={doStuff} col={4} row={2} />
          <Image img={d} onClick={doStuff} col={4} row={3} />
        </Column>
        <Column col={5} row={3} slideOut={slideOut}>
          <Image
            img={e}
            onClick={doStuff}
            col={5}
            row={1}
            slideLeft={slideLeft}
          />
          <Image img={g} onClick={doStuff} col={5} row={2} />
          <Image img={f} onClick={doStuff} col={5} row={3} />
        </Column>

        <ShowsWrapper slideOut={slideOut}>SHOWS</ShowsWrapper>
      </StyledImages>
    </>
  );
};
// In The Morning Lights
export default Gallery;

function shuffle<T>(a: Array<T>): Array<T> {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

{
  /* {shuffle(
        images.map(({ node }) => (
          <Image img={node} key={node.id} onClick={doStuff} />
        ))
      )}
      {shuffle(
        images.map(({ node }) => (
          <Image img={node} key={node.id} onClick={doStuff} />
        ))
      )} */
}

// const { data } = useSWR<InstagramImagesResponse>(instagramImages, axios, {
//   refreshInterval: 0
// });

// if (!data) {
//   return <Loading />;
// }

// const images = data.data.graphql.user.edge_owner_to_timeline_media.edges;
// const goodImages = images.filter(
//   ({ node }) => node.accessibility_caption !== "Image may contain: night"
// );
