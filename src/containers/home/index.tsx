/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useContext } from "react";
import Container from "components/container";
import PokemonItem from "components/pokemon/item";
import { StateContext } from "contexts/state-context";
import SimpleDesc from "components/simple-desc";
import { ModalStyled } from "components/simple-desc/styled";
import Layout from "../layouts";
import { useStaticQuery, graphql } from "gatsby";
import { ListStyled } from "./styled";

type Props = {
  pageContext: object;
};

const Home: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const { bookmarks, handleAdd, handleDelete } = useContext(StateContext);

  const data = useStaticQuery(graphql`
    query Pokemon {
      pokemon {
        pokemons(first: 20) {
          totalCount
          edges {
            node {
              id
              order
              name
              species {
                name
                names {
                  name
                }
              }
              height
              weight
              types {
                type {
                  name
                }
              }
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
      }
    }
  `);

  const handleClick = (toggle, index, item, e) => {
    e.stopPropagation();
    if (e.currentTarget.localName === "button") {
      if (!toggle) {
        handleAdd({ [item.id]: item });
      } else {
        handleDelete(item.id);
      }
    } else {
      setVisible(true);
      setCurrentPokemon(index);
      window.history.pushState(
        { page: "another" },
        "another page",
        `/detail/${data.pokemon.pokemons.edges[index].node.name}`
      );
    }
  };

  const handleCancel = () => {
    setVisible(false);
    window.history.pushState({ page: "another" }, "another page", "/");
  };

  return (
    <Layout>
      <Container type="sm">
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              Total <b>{data.pokemon.pokemons.totalCount}</b>
            </span>
          </div>
          <ListStyled>
            {data.pokemon.pokemons.edges.map(({ node }, i) => (
              <li>
                <PokemonItem
                  item={node}
                  onClick={(toggle, e) => handleClick(toggle, i, node, e)}
                />
              </li>
            ))}
          </ListStyled>
        </div>
      </Container>
      <ModalStyled destroyOnClose footer={null} onCancel={handleCancel} visible={visible}>
        <SimpleDesc item={data.pokemon.pokemons.edges[currentPokemon]?.node} />
      </ModalStyled>
    </Layout>
  );
};

export default Home;
