import React from "react";
import styled from "styled-components";
import { content } from "../constants/endpoints";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import { Contents } from "../types/ApiResponses";
import { homePageIntro } from "../constants/contentNames";

const StyledHome = styled.div``;

const Home = ({ path }: { path: string }) => {
  const { data } = useSWR<Contents>(content);

  if (!data) {
    return <Loading />;
  }

  const intro = data.find(n => n.name === homePageIntro);

  return (
    <>
      <StyledHome>{intro?.title}</StyledHome>
      <StyledHome>{intro?.body}</StyledHome>
    </>
  );
};

export default Home;
