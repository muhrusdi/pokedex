/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "components/container";
import { Row, Col } from "antd";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import { Hero, InformationStyled } from "./styled";

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
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
