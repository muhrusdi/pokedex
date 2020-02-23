import React from "react";
import { Row, Col } from "antd";
import Img from "gatsby-image";
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
  item: object;
};

const PokemonItem: React.FC<Props> = ({ onClick, item }) => {
  return (
    <PokemonItemStyled onClick={onClick}>
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
