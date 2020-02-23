/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import { Link } from "gatsby";
import Container from "components/container";
import Layout from "../layouts";
import PokemonItem from "components/pokemon/item";
import Types from "components/types";
import SimpleDesc from "components/simple-desc";
import { useStaticQuery, graphql } from "gatsby";
import { ListStyled, ModalStyled } from "./styled";

type Props = {
  pageContext: object;
};

const Home: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const data = useStaticQuery(graphql`
    query Pokemon {
      pokemon {
        pokemons(first: 20) {
          id
          name
          types
          classification
          height {
            minimum
            maximum
          }
          weight {
            minimum
            maximum
          }
          number
          imageFile {
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed
              }
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);

  const handleClick = index => {
    setVisible(true);
    setCurrentPokemon(index);
    window.history.pushState(
      { page: "another" },
      "another page",
      `/detail/${data.pokemon.pokemons[index].name.toLowerCase()}`
    );
  };

  const handleCancel = () => {
    setVisible(false);
    window.history.pushState({ page: "another" }, "another page", "/");
  };

  return (
    <Layout>
      <Container type="sm">
        <div>
          <ListStyled>
            {data.pokemon.pokemons.map((item, i) => (
              <li>
                <PokemonItem item={item} onClick={() => handleClick(i)} />
              </li>
            ))}
          </ListStyled>
        </div>
      </Container>
      <ModalStyled footer={null} onCancel={handleCancel} visible={visible}>
        <SimpleDesc item={data.pokemon.pokemons[currentPokemon]} />
      </ModalStyled>
    </Layout>
  );
};

export default Home;
