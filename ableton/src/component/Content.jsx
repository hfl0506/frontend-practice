import styled from "styled-components";
import TopContent from "./TopContent";
import MidContent from "./MidContent";

const ContentWrapper = styled.div`
  height: 1500px;
  display: grid;
  gap: 50px;
`;

function Content() {
  return (
    <ContentWrapper>
      <TopContent />
      <MidContent />
    </ContentWrapper>
  );
}

export default Content;
