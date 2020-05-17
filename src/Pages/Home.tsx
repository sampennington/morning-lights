import React from "react";
import styled from "styled-components";
import mainImage from "../resources/main-image.jpg";
import YouTube from "react-youtube";

const StyledHome = styled.div`
  padding-top: 135px;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
`;

const ComingSoon = styled.h2`
  color: white;
  font-size: 37px;
  margin: 0;
  font-family: MrEavesReg;
`;

const IntoSunlight = styled.h1`
  color: white;
  font-size: 62px;
  margin-bottom: 0;
  font-family: MrEavesBold;
`;

const Title = styled.div`
  right: 30px;
  top: 135px;
  text-align: right;
  position: absolute;
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
      {/* <Title>
        <IntoSunlight>
          INTO <br />
          SUNLIGHT
        </IntoSunlight>
        <ComingSoon>COMING SOON</ComingSoon>
      </Title> */}
      <MainImage src={mainImage} alt="" />
      <VideoWrapper>
        <YouTube
          videoId="kz1jUh38KLI"
          opts={{ playerVars: { autoplay: 1 } }}
          className="youtube-video"
        />
      </VideoWrapper>
    </StyledHome>
  );
};

export default Home;
