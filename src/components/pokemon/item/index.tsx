import React from "react";
import { Row, Col } from "antd";
import {
  PokemonItemStyled,
  ImageStyled,
  List,
  Type,
  Title,
  Footer
} from "./styled";
import { randomColor } from "utils";

type Props = {
  onClick: { target: HTMLElement };
};

const PokemonItem: React.FC<Props> = ({ onClick }) => {
  return (
    <PokemonItemStyled onClick={onClick}>
      <Row>
        <Col xs={6} style={{ minWidth: 100 }}>
          <div>
            <ImageStyled
              src="https://img.pokemondb.net/artwork/squirtle.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col xs={18}>
          <div>
            <Title>
              <h2>Pokemon</h2>
              <span>#002</span>
            </Title>
            <List>
              <li>
                <Type color={() => randomColor()}>Glass</Type>
              </li>
              <li>
                <Type color={() => randomColor()}>Glass</Type>
              </li>
              <li>
                <Type color={() => randomColor()}>Glass</Type>
              </li>
            </List>
            <Footer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b9696"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </Footer>
          </div>
        </Col>
      </Row>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
