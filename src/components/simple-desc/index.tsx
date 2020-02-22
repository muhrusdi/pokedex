import React from "react";
import { Row, Col } from "antd";
import { Link } from "gatsby";
import Types from "../types";
import {
  ListStyled,
  ModalStyled,
  ModalContent,
  ModalContentDesc,
  ButtonClose,
  Flex,
  ImageStyled,
  SeeDetail,
  ModalListDesc
} from "./styled";

type Props = {
  type: string;
};

export const SimpleDesc: React.FC<Props> = ({ type }) => (
  <div>
    <ModalContent>
      <Flex>
        <div>
          <h2>Pokemon</h2>
          <div>
            <Types
              data={[{ name: "Pokemon" }, { name: "Seed" }, { name: "Seed" }]}
            />
          </div>
        </div>
        <Flex style={{ alignItems: "center" }}>
          <div style={{ marginRight: 14 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          {type !== "detail" && (
            <Link to="/detail">
              <SeeDetail>See Details</SeeDetail>
            </Link>
          )}
        </Flex>
      </Flex>
      <ModalContentDesc>
        <Row gutter={40} align="middle">
          <Col sm={14}>
            <div>
              <ModalListDesc>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Species</span>
                    </Col>
                    <Col sm={12}>
                      <span>Seed Pokémon</span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Species</span>
                    </Col>
                    <Col sm={12}>
                      <span>Seed Pokémon</span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Species</span>
                    </Col>
                    <Col sm={12}>
                      <span>Seed Pokémon</span>
                    </Col>
                  </Row>
                </li>
              </ModalListDesc>
            </div>
          </Col>
          <Col sm={10}>
            <div>
              <ImageStyled
                src="https://img.pokemondb.net/artwork/squirtle.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </ModalContentDesc>
    </ModalContent>
  </div>
);

export default SimpleDesc;
