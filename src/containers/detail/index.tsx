/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "components/container";
import { Row, Col } from "antd";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import {
  Hero,
  InformationStyled,
  EvolutionStyled,
  Section,
  EvoItem,
  EvoItemDesc
} from "./styled";

type Props = {
  pageContext: object;
  data: object,
};

type TrainingProps = {
  title: string;
  item: object;
};

const Information: React.FC<TrainingProps> = ({ title, item }) => {
  return (
    <InformationStyled>
      <h4>{title}</h4>
      <ul>
        <Row>
          <Col sm={8}>
            <div>
              <span>Name</span>
            </div>
          </Col>
          <Col sm={14}>
            <div>
              <span>Damage</span>
            </div>
          </Col>
        </Row>
        {item?.map(childItem => (
            <li>
              <Row>
                <Col sm={8}>
                  <div>
                    <span>{childItem.name}</span>
                  </div>
                </Col>
                <Col sm={14}>
                  <div>
                    <span>{childItem.damage}</span>
                  </div>
                </Col>
              </Row>
            </li>
          ))}
      </ul>
    </InformationStyled>
  );
};

const EvolutionItem = ({ data }) => (
  <div>
    <EvoItem>
      <Img
        style={{
          top: "50%",
          transform: "translateY(-50%)"
        }}
        fluid={data?.imageFile.childImageSharp.fluid}
        alt={data?.name}
      />
    </EvoItem>
    <EvoItemDesc>
      <span>{data?.number}</span>
      <h4>{data?.name}</h4>
    </EvoItemDesc>
  </div>
);

type ItemType = {
  evolutions?: object[];
};

interface EvelotionType {
  title: string;
  item: ItemType;
}

const Evolution: React.FC<EvelotionType> = ({ title, item }) => (
  <EvolutionStyled>
    <h3>{title}</h3>
    <Row gutter={10}>
      <Col xs={24} sm={8}>
        <EvolutionItem data={item} />
      </Col>
      {item?.evolutions?.map(childItem => (
          <Col xs={24} sm={8}>
            <EvolutionItem data={childItem} />
          </Col>
        ))}
    </Row>
  </EvolutionStyled>
);

const Detail: React.FC<Props> = props => {
  const pokemon = props.data?.pokemon.pokemon;

  return (
    <Layout>
      <Container type="sm">
        <div>
          <Hero>
            <SimpleDesc type="detail" item={pokemon} />
          </Hero>
          <Section>
            <h3>Attacs</h3>
            <Information title="Fast" item={pokemon?.attacks.fast} />
            <Information title="Special" item={pokemon?.attacks.special} />
          </Section>
          <Evolution title="Evolution" item={pokemon} />
        </div>
      </Container>
    </Layout>
  );
};

export default Detail;

export const pageQuery = graphql`
  query DetailQuery($id: String) {
    pokemon {
      pokemon(id: $id) {
        id
        name
        types
        number
        classification
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
        evolutions {
          id
          name
          number
          types
          imageFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        weaknesses
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        fleeRate
        maxCP
        maxHP
        imageFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
