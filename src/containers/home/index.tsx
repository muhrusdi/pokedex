/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import { Link } from "gatsby";
import Container from "components/container";
import Layout from "../layouts";
import PokemonItem from "components/pokemon/item";
import Types from "components/types";
import SimpleDesc from "components/simple-desc";
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
  pageContext: object;
};

const Home: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  console.log(props);
  const handleClick = () => {
    setVisible(true);
    window.history.pushState(
      { page: "another" },
      "another page",
      "/detail/pokemon"
    );
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
            <li>
              <PokemonItem onClick={handleClick} />
            </li>
            <li>
              <PokemonItem onClick={handleClick} />
            </li>
            <li>
              <PokemonItem onClick={handleClick} />
            </li>
          </ListStyled>
        </div>
      </Container>
      <ModalStyled footer={null} onCancel={handleCancel} visible={visible}>
        <SimpleDesc />
      </ModalStyled>
    </Layout>
  );
};

export default Home;
