/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "components/container";
import { Row, Col } from "antd";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import {
  Hero,
  InformationStyled,
  EvolutionStyled,
  EvoItem,
  EvoItemDesc
} from "./styled";

type Props = {
  pageContext: object;
};

type TrainingProps = {
  title: string;
};

const Information: React.FC<TrainingProps> = ({ title }) => {
  return (
    <InformationStyled>
      <h3>{title}</h3>
      <ul>
        <li>
          <Row>
            <Col sm={8}>
              <div>
                <span>National №</span>
              </div>
            </Col>
            <Col sm={14}>
              <div>
                <span>002</span>
              </div>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col sm={8}>
              <div>
                <span>National №</span>
              </div>
            </Col>
            <Col sm={14}>
              <div>
                <span>002</span>
              </div>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col sm={8}>
              <div>
                <span>National №</span>
              </div>
            </Col>
            <Col sm={14}>
              <div>
                <span>002</span>
              </div>
            </Col>
          </Row>
        </li>
      </ul>
    </InformationStyled>
  );
};

const EvolutionItem = () => (
  <div>
    <EvoItem>
      <img src="https://img.pokemondb.net/artwork/squirtle.jpg" alt="" />
    </EvoItem>
    <EvoItemDesc>
      <span>#003</span>
      <h4>Docosaurus</h4>
    </EvoItemDesc>
  </div>
);

const Evolution = ({ title }) => (
  <EvolutionStyled>
    <h3>{title}</h3>
    <Row gutter={10}>
      <Col sm={8}>
        <EvolutionItem />
      </Col>
      <Col sm={8}>
        <EvolutionItem />
      </Col>
      <Col sm={8}>
        <EvolutionItem />
      </Col>
    </Row>
  </EvolutionStyled>
);

const Home: React.FC<Props> = props => {
  console.log(props);
  return (
    <Layout>
      <Container type="sm">
        <div>
          <Hero>
            <SimpleDesc type="detail" />
          </Hero>
          <Information title="Information" />
          <Information title="Training" />
          <Information title="Breeding" />
          <Evolution title="Evolution" />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
