import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "gatsby";
import { StateContext } from "contexts/state-context";
import Img from "gatsby-image";
import ButtonBookmark from "../bookmark";
import Types from "../types";
import {
  ModalContent,
  ModalContentDesc,
  Flex,
  SeeDetail,
  ModalListDesc
} from "./styled";

type Props = {
  type: string;
  item: object;
};

export const SimpleDesc: React.FC<Props> = ({ type, item }) => {
  const { bookmarks, handleAdd, handleDelete } = useContext(StateContext);
  const isBookarked = Object.keys(bookmarks).length && !!bookmarks[item.id]

  const handleClick = (toggle) => {
    if (!toggle) {
      handleAdd({[item.id]: item});
    } else {
      handleDelete(item.id);
    }
  }

  return (
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
              <ButtonBookmark toggle={isBookarked} onClick={(toggle, e) => handleClick(toggle, e)} />
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
};

export default SimpleDesc;
