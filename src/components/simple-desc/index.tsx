import React from "react";
import { Row, Col } from "antd";
import { Link } from "gatsby";
import Img from "gatsby-image";
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
  item: object;
};

export const SimpleDesc: React.FC<Props> = ({ type, item }) => (
  <div>
    <ModalContent>
      <Flex>
        <div>
          <h2>{item?.name}</h2>
          <div>
            <Types data={item?.types} />
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
            <Link to={`/detail/${item?.name.toLowerCase()}`}>
              <SeeDetail>See Details</SeeDetail>
            </Link>
          )}
        </Flex>
      </Flex>
      <ModalContentDesc>
        <Row gutter={40} align="middle">
          <Col xs={24} sm={14}>
            <div>
              <ModalListDesc>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Species</span>
                    </Col>
                    <Col sm={12}>
                      <span>{item?.classification}</span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Height</span>
                    </Col>
                    <Col sm={12}>
                      <span>
                        {item?.height.minimum} - {item?.height.maximum}
                      </span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col sm={12}>
                      <span>Weight</span>
                    </Col>
                    <Col sm={12}>
                      <span>
                        <span>
                          {item?.weight.minimum} - {item?.weight.maximum}
                        </span>
                      </span>
                    </Col>
                  </Row>
                </li>
              </ModalListDesc>
            </div>
          </Col>
          <Col xs={24} sm={10}>
            <div>
              {/* <ImageStyled
                src="https://img.pokemondb.net/artwork/squirtle.jpg"
                alt=""
              /> */}
              <Img
                fluid={item?.imageFile.childImageSharp.fluid}
                alt={item?.name}
              />
            </div>
          </Col>
        </Row>
      </ModalContentDesc>
    </ModalContent>
  </div>
);

export default SimpleDesc;
