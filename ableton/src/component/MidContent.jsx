import styled from "styled-components";
import MidContent1 from "../assets/mid-content-1.jpg";
import MidContent2 from "../assets/mid-content-2.jpg";

const MidContentWrapper = styled.div`
  height: 600px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    width: 600px;
    margin: auto;
  }
`;
const ImgWrapper = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  justify-content;

  img {
    width: 200px;
    height: 100px;
  }
`;

const YellowBox = styled.div`
  height: 300px;
  width: 300px;
  background-color: #fbffa7;
  z-index: -1;
  margin-left: 100px;
`;

function MidContent() {
  return (
    <MidContentWrapper>
      <ImgWrapper>
        <YellowBox className="yellow-box"></YellowBox>
        <img src={MidContent1} />
        <img src={MidContent2} />
      </ImgWrapper>
      <p>
        Making music isn’t easy. It takes time, effort, and learning. But when
        you’re in the flow, it’s incredibly rewarding. We feel the same way
        about making Ableton products. The driving force behind Ableton is our
        passion for what we make, and the people we make it for.
      </p>
      <p>
        We feel the same way about making Ableton products. The driving force
        behind Ableton is our passion for what we make, and the people we make
        it for.
      </p>
    </MidContentWrapper>
  );
}

export default MidContent;
