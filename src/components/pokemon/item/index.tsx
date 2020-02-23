import React, { useState, useContext } from "react";
import { Row, Col } from "antd";
import Img from "gatsby-image";
import { StateContext } from "contexts/state-context";
import { PokemonItemStyled, List, Type, Title, Footer } from "./styled";
import ButtonBookmark from "../../bookmark";
import { randomColor } from "utils";

type Props = {
  onClick: { target: HTMLElement };
  item: object;
};

const PokemonItem: React.FC<Props> = ({ onClick, item }) => {
  const { bookmarks } = useContext(StateContext);
  return (
    <PokemonItemStyled onClick={e => onClick(null, e)}>
      <Row gutter={10}>
        <Col sm={8} style={{ width: 160, textAlign: "center" }}>
          <Img fixed={item.imageFile.childImageSharp.fixed} alt={item.name} />
        </Col>
        <Col sm={16}>
          <div>
            <Title>
              <h2>{item.name}</h2>
              <span>#{item.number}</span>
            </Title>
            <List>
              {item.types.map(type => (
                <li>
                  <Type color={randomColor}>{type}</Type>
                </li>
              ))}
            </List>
            <Footer>
              <ButtonBookmark toggle={bookmarks[item.id]} onClick={onClick} />
            </Footer>
          </div>
        </Col>
      </Row>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
