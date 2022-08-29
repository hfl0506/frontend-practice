import styled, { css } from "styled-components";
import useStickyHeader from "../hooks/useStickyHeader";

const StickyStyle = `
    postion: fixed;
    top: 0;
    width: 100%;
    opacity: 0.6;
`;

const StickyHeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 120px;
  padding: 0px 20px;
  a {
    color: black;
    text-decoration: none;
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
