import React from "react";
import styled from "styled-components";
import { instagramImages } from "../constants/endpoints";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import Image from "../components/Image/Image";
import { mqMediumUp, mqSmallUp, mqLargeUp } from "../utils/mq";
import { InstagramImagesResponse } from "../types/ApiResponses";

const StyledImages = styled.div`
  column-count: 1;
  line-height: 0px;
  column-gap: 0px;
  width: 100%;

  ${mqSmallUp(`
    column-count: 2;
  `)}

  ${mqMediumUp(`
    column-count: 3;
  `)}

  ${mqLargeUp(`
    column-count: 5;
`)}
`;

const Gallery = ({ path }: { path: string }) => {
  const { data } = useSWR<InstagramImagesResponse>(instagramImages, axios);

  if (!data) {
    return <Loading />;
  }

  const images = data.data.graphql.user.edge_owner_to_timeline_media.edges;
  const goodImages = images.filter(
    ({ node }) => node.accessibility_caption !== "Image may contain: night"
  );

  return (
    <StyledImages>
      {shuffle(
        goodImages.map(({ node }) => <Image img={node} key={node.id} />)
      )}
      {shuffle(
        goodImages.map(({ node }) => <Image img={node} key={node.id} />)
      )}
    </StyledImages>
  );
};

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
