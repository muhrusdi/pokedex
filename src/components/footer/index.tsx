import React from "react";
import styled from "styled-components";
import { ListContent } from "../nav";
import Container from "../container";

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
  margin-top: 40px;
  li {
    padding: 0 14px;
    a {
      color: #808080;
      text-transform: uppercase;
    }
  }
`;

export const Header = styled.header`
  margin-top: 40px;
`;

const FooterStyled = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 22px;
    font-weight: bold;
    span {
      color: #03970c;
    }
  }
`;

const Footer = () => (
  <Header>
    <Container type="sm">
      <FooterStyled>
        <h4>
          Poke<span>dex</span>
        </h4>
        <ListContent />
      </FooterStyled>
    </Container>
  </Header>
);

export default Footer;
