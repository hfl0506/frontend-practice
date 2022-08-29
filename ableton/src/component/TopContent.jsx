import styled, { css } from "styled-components";
import TopContentImg from "../assets/top-content-img.jpg";

const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;

  a {
    color: #0000ff;
    text-decoration: none;
  }
  img {
    width: 500px;
    height: 500px;
    margin: auto;
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
      <img src={TopContentImg} />
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
