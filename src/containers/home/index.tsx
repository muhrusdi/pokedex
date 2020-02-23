/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useContext } from "react";
import Container from "components/container";
import PokemonItem from "components/pokemon/item";
import { StateContext } from "contexts/state-context";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import { useStaticQuery, graphql } from "gatsby";
import { ListStyled, ModalStyled } from "./styled";

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

  const handleClick = (toggle, index, item, e) => {
    e.stopPropagation();
    if (e.currentTarget.localName === "button") {
      if (!toggle) {
        handleAdd({ [item.id]: item });
        console.log(bookmarks);
      } else {
        handleDelete(item.id);
      }
    } else {
      setVisible(true);
      setCurrentPokemon(index);
      window.history.pushState(
        { page: "another" },
        "another page",
        `/detail/${data.pokemon.pokemons[index].name.toLowerCase()}`
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
          <ListStyled>
            {data.pokemon.pokemons.map((item, i) => (
              <li>
                <PokemonItem
                  item={item}
                  onClick={(toggle, e) => handleClick(toggle, i, item, e)}
                />
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
