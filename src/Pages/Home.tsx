import React from "react";
import styled from "styled-components";
import mainImage from "../resources/main.jpg";
import YouTube from "react-youtube";

const StyledHome = styled.div`
  padding-top: 135px;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
`;

const ComingSoon = styled.h1`
  color: white;
  position: absolute;
  font-size: 90px;
  right: 30px;
  top: 135px;
  text-align: right;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 42%;
  padding-top: 25;
  height: 0;
`;

const Home = ({ path }: { path: string }) => {
  return (
    <StyledHome>
      <ComingSoon>
        INTO <br />
        SUNLIGHT
        <br />
        COMING <br />
        SOON
      </ComingSoon>
      <MainImage src={mainImage} alt="" />
      <VideoWrapper>
        <YouTube
          videoId="kz1jUh38KLI"
          opts={{ playerVars: { autoplay: 1, controls: 0 } }}
          className="youtube-video"
        />
      </VideoWrapper>
    </StyledHome>
  );
};

export default Home;
