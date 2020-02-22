/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "components/container";
import Layout from "../layouts";
import PokemonItem from "components/pokemon/item";
import { ListStyled, HeroTitle, Header, ListDesc } from "./styled";

type Props = {
  pageContext: object;
};

const Home: React.FC<Props> = props => {
  console.log(props);
  return (
    <Layout>
      <Container type="sm">
        <div>
          <Header>
            <HeroTitle>
              Poke<span>dex</span>
            </HeroTitle>
            <ListDesc>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My Bookmark</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ListDesc>
          </Header>
          <ListStyled>
            <li>
              <PokemonItem />
            </li>
            <li>
              <PokemonItem />
            </li>
            <li>
              <PokemonItem />
            </li>
          </ListStyled>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
