import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0.6);
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const LeftNav = styled(Nav)`
  width: 500px;
  a:last-child {
    color: #ff764d;
  }
`;

const RightNav = styled(Nav)`
  width: 300px;
  padding-right: 20px;
  a:first-child {
    color: #0000ff;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeroWrapper>
        <box-icon name="rocket" size="40px"></box-icon>
      </HeroWrapper>
      <NavWrapper>
        <LeftNav>
          <a href="/">Live</a>
          <a href="/">Push</a>
          <a href="/">Link</a>
          <a href="/">Shop</a>
          <a href="/">Packs</a>
          <a href="/">Help</a>
          <a href="/">More +</a>
        </LeftNav>
        <RightNav>
          <a href="/">Try Live for free</a>
          <a href="/">Account</a>
          <a href="/">Logout</a>
        </RightNav>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
