import React from "react";
import styled from "styled-components";
import { instagramImages } from "../constants/endpoints";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import Image from "../components/Image/Image";
import { mqMediumUp, mqSmallUp, mqLargeUp } from "../utils/mq";

const StyledImages = styled.div`
  column-count: 1;
  line-height: 5px;
  column-gap: 5px;
  ${mqSmallUp(`
    column-count: 2;
  `)}

  ${mqMediumUp(`
      column-count: 3;
  `)}

  ${mqLargeUp(`
    column-count: 4;
`)}
`;

const Gallery = ({ path }: { path: string }) => {
  const { data } = useSWR(instagramImages, axios);

  if (!data) {
    return <Loading />;
  }

  //@ts-ignore
  const images = data.data.graphql.user.edge_owner_to_timeline_media.edges;
  const goodImages = images.filter(
    ({ node }: { node: any }) =>
      node.accessibility_caption !== "Image may contain: night"
  );

  return (
    <StyledImages>
      {goodImages.map(({ node }: { node: any }) => (
        <Image img={node} key={node.id} />
      ))}
    </StyledImages>
  );
};

export default Gallery;
