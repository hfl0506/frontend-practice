import styled, { css } from "styled-components";
import TopContentImg from "../assets/top-content-img.jpg";

const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  a {
    color: #0000ff;
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  width: auto;
  margin: auto;
  position: relative;
  img {
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: auto;
  }
  span {
    position: absolute;
    top: 50%;
    left: 46%;
    transform: translate(-50%, -50%);
    width: 100px;
    font-size: 4rem;
    font-weight: bold;
    color: #ff764d;
  }
`;

const Paragraph = styled.p`
  width: 500px;
  margin: auto;
  padding-top: 40px;
`;

const FirstParagraph = styled(Paragraph)`
  font-size: 16px;
  font-weight: 700;
`;

const SecondParagraph = styled(Paragraph)`
  font-size: 12px;
  font-weight: 400;
`;

function TopContent() {
  return (
    <TopContentWrapper>
      <ImageWrapper>
        <span>Ableton</span>
        <img src={TopContentImg} />
      </ImageWrapper>
      <FirstParagraph>
        We make <a href="/">Live</a>, <a href="/">Push</a> and{" "}
        <a href="/">Link</a> — unique software and hardware for music creation
        and performance. With these products, our community of users creates
        amazing things.
      </FirstParagraph>
      <SecondParagraph>
        Ableton was founded in 1999 and released the first version of Live in
        2001. Our products are used by a community of dedicated musicians, sound
        designers, and artists from across the world.
      </SecondParagraph>
    </TopContentWrapper>
  );
}

export default TopContent;
