/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useContext } from "react";
import Container from "components/container";
import PokemonItem from "components/pokemon/item";
import { Empty } from "antd";
import { StateContext } from "contexts/state-context";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import { useStaticQuery, graphql } from "gatsby";
import { ListStyled, ModalStyled } from "../home/styled";

type Props = {
  pageContext: object;
};

const Bookmark: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const { bookmarks, handleAdd, handleDelete } = useContext(StateContext);

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
      setCurrentPokemon(index.id);
      window.history.pushState(
        { page: "another" },
        "another page",
        `/detail/${index.name.toLowerCase()}`
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
            {Object.keys(bookmarks || {}).map((key, i) => (
              <li>
                <PokemonItem
                  item={bookmarks[key]}
                  onClick={(toggle, e) =>
                    handleClick(toggle, i, bookmarks[key], e)
                  }
                />
              </li>
            ))}
          </ListStyled>
          {!Object.keys(bookmarks || {}).length && (
            <div>
              <Empty />
            </div>
          )}
        </div>
      </Container>
      <ModalStyled footer={null} onCancel={handleCancel} visible={visible}>
        <SimpleDesc item={bookmarks[currentPokemon]} />
      </ModalStyled>
    </Layout>
  );
};

export default Bookmark;
