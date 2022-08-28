import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import StickyHeader from "./component/StickyHeader";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <StickyHeader />
      <Content />
      <Footer />
    </AppWrapper>
  );
}

export default App;
