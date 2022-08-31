import styled, { css } from "styled-components";
import useStickyHeader from "../hooks/useStickyHeader";

const StickyStyle = `
    position: sticky;
    top: 0;
    opacity: 0.9;
    padding-top: 20px;
    transition: all 0.5s;
    z-index: 20; 
`;

const StickyHeaderNav = styled.nav`
  align-items: center;
  height: 60px;
  padding: 0px 20px;
  background-color: white;
  a {
    color: black;
    text-decoration: none;
    padding-right: 20px;
  }
  a:first-child {
    color: #ff764d;
  }
  ${(props) =>
    props.isSticked
      ? css`
          ${StickyStyle}
        `
      : ""}
`;

function StickyHeader() {
  const isSticked = useStickyHeader();
  return (
    <StickyHeaderNav isSticked={isSticked}>
      <a href="/">About</a>
      <a href="/">Jobs</a>
    </StickyHeaderNav>
  );
}

export default StickyHeader;
