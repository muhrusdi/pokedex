import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const HeroTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  margin: 0;
  span {
    color: #ef5350;
  }
`;

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListDesc = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  li {
    padding: 0 14px;
    a {
      color: #808080;
      text-transform: uppercase;
    }
  }
`;

export const Header = styled.header`
  padding: 20px 0;
`;

export const ListContent = () => (
  <ListDesc>
    <li>
      <Link to="/">
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link to="/bookmark">
        <span>My Bookmark</span>
      </Link>
    </li>
    <li>
      <Link to="/about">
        <span>About</span>
      </Link>
    </li>
  </ListDesc>
);

const Nav = () => (
  <Header>
    <Link to="/">
      <HeroTitle>
        Poke<span>dex</span>
      </HeroTitle>
    </Link>
    <ListContent />
  </Header>
);

export default Nav;
