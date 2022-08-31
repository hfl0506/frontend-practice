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
`;

const ImgSelf = styled.img`
  position: absolute;
`;

const LeftImg = styled(ImgSelf)`
  width: 300px;
  height: 250px;
  left: 20%;
`;

const RightImg = styled(ImgSelf)`
  width: 150px;
  height: 85px;
  left: 65%;
  z-index: 10;
  transform: translateY(50);
`;

const YellowBox = styled.div`
  height: 250px;
  width: 250px;
  background-color: #fbffa7;
  margin-left: 100px;
  position: absolute;
  left: 50%;
`;

function MidContent() {
  return (
    <MidContentWrapper>
      <ImgWrapper>
        <YellowBox className="yellow-box"></YellowBox>
        <LeftImg src={MidContent1} />
        <RightImg src={MidContent2} />
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
