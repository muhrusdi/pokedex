import React, { useContext, useState } from "react";
import { Row, Col, Modal, Input } from "antd";
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
  ModalEditStyled,
  ModalListDesc
} from "./styled";

type Props = {
  type: string;
  item: object;
};

export const SimpleDesc: React.FC<Props> = ({ type, item }) => {
  const { bookmarks, handleAdd, handleDelete } = useContext(StateContext);
  const [dataToggle, setDataToggle] = useState(bookmarks && !!bookmarks[item?.id]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChangeInput = e => {
    setName(e.target.value);
  }

  const handleSave = () => {
    const newArr = item?.species.names;
    newArr[2].name = name ? name : item?.species.names[2].name
    const newObj = {
      ...item,
      species: {
        ...item?.species,
        names: newArr,
      }
    }
    handleAdd({[item?.id]: newObj});
    setDataToggle(true);
    setVisible(false);
  }

  const handleCancel = () => {
    setVisible(false);
    setDataToggle(false);
  }

  const handleClick = (toggle) => {
    if (!toggle) {
      setVisible(true);
    } else {
      handleDelete(item?.id);
      setDataToggle(false);
    }
  }

  return (
    <div>
      <ModalContent>
        <Flex>
          <div>
            <h2>{item?.species?.names[2].name}</h2>
            <div>
              <Types data={item?.types} />
            </div>
          </div>
          <Flex style={{ alignItems: "center" }}>
            <div style={{ marginRight: 14 }}>
              <ButtonBookmark toggle={dataToggle} onClick={(toggle, e) => handleClick(toggle, e)} />
            </div>
            {type !== "detail" && (
              <Link to={`/detail/${item?.name}`}>
                <SeeDetail><span>See </span>Details</SeeDetail>
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
                        <span style={{textTransform: "capitalize"}}>{item?.species.name}</span>
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
                          {item?.height} m
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
                            {item?.weight} Kg
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

        <ModalEditStyled
          title={null}
          closable={false}
          destroyOnClose
          visible={visible}
          onOk={handleSave}
          okText="Save to My Pokemon"
          onCancel={handleCancel}
        >
          <h4>Name</h4>
          <Input
            placeholder="Enter nickname"
            onChange={handleChangeInput}
            style={{
              height: 43,
              borderRadius: 10,
            }}
            defaultValue={item?.species.names[2].name}
          />
        </ModalEditStyled>
      </ModalContent>
    </div>
  );
};

export default SimpleDesc;
