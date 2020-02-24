import React, { useState, useContext } from "react";
import { Row, Col } from "antd";
import Img from "gatsby-image";
import { StateContext } from "contexts/state-context";
import { PokemonItemStyled, List, Type, Title, Footer } from "./styled";
import ButtonBookmark from "../../bookmark";
import Types from "../../types";

type Props = {
  onClick: { target: HTMLElement };
  item: object;
};

const PokemonItem: React.FC<Props> = ({ onClick, item }) => {
  const { bookmarks } = useContext(StateContext);
  console.log(item);
  return (
    <PokemonItemStyled onClick={e => onClick(null, e)}>
      <Row gutter={10}>
        <Col sm={8} style={{ width: 160, textAlign: "center" }}>
          <Img fixed={item.imageFile.childImageSharp.fixed} alt={item.name} />
        </Col>
        <Col sm={16}>
          <div>
            <Title>
              <h2>{item.species.names[2].name}</h2>
              <span>#{item.order}</span>
            </Title>
            <List>
              <Types data={item.types} />
            </List>
            <Footer>
              <ButtonBookmark
                toggle={bookmarks && bookmarks[item.id]}
                onClick={onClick}
              />
            </Footer>
          </div>
        </Col>
      </Row>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
