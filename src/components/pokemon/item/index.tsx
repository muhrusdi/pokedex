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

const PokemonItem: React.FC = () => {
  return (
    <PokemonItemStyled>
      <Row>
        <Col sm={6}>
          <div>
            <ImageStyled
              src="https://img.pokemondb.net/artwork/squirtle.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col sm={18}>
          <div>
            <Title>
              <h2>Pokemon</h2>
              <span>#002</span>
            </Title>
            <List>
              <li>
                <Type>Glass</Type>
              </li>
              <li>
                <Type>Glass</Type>
              </li>
              <li>
                <Type>Glass</Type>
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
