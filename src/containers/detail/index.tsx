/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "components/container";
import { Row, Col } from "antd";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SimpleDesc from "components/simple-desc";
import Layout from "../layouts";
import { randoColorAdvanced } from "utils";
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
  type: string,
};

const Information: React.FC<TrainingProps> = ({ title, item, type }) => {
  console.log(item)
  return (
    <InformationStyled>
      <h4>{title}</h4>
      <ul>
        {item.map((childItem) => (
            <li>
              <span>{childItem[type].names[2].name}</span>
            </li>
          ))}
      </ul>
    </InformationStyled>
  );
};

const EvolutionItem = ({ data }) => {
  return (
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
        <span>#{data?.order}</span>
        <h4>{data?.name}</h4>
      </EvoItemDesc>
    </div>
  )
};

type ItemType = {
  evolutions?: object[];
};

interface EvelotionType {
  title: string;
  item: ItemType;
}

const Evolution: React.FC<EvelotionType> = ({ title, item }) => {
  return (
    <EvolutionStyled>
      <h2>{title}</h2>
      <Row gutter={10}>
        <Col xs={24} sm={8}>
          <EvolutionItem data={item.chain?.species} />
        </Col>
        {
          item.chain.evolvesTo.length && (
            <Col xs={24} sm={8}>
              <EvolutionItem data={item.chain?.evolvesTo[0]?.species} />
            </Col>
          )
        }
        {
          item.chain.evolvesTo.length && (
            <Col xs={24} sm={8}>
              <EvolutionItem data={item.chain?.evolvesTo[0]?.evolvesTo[0]?.species} />
            </Col>
          )
        }
      </Row>
    </EvolutionStyled>
  )
};

const Detail: React.FC<Props> = props => {
  const { pokemon, evolutionChain } = props.data?.pokemon;

  return (
    <Layout>
      <Container type="sm">
        <div>
          <Hero>
            <SimpleDesc type="detail" item={pokemon} />
          </Hero>
          <Evolution title="Evolution" item={evolutionChain} />
          <Section>
            <Information title="Abilites" type="ability" item={pokemon?.abilities} />
            <Information title="Moves" type="move" item={pokemon?.moves} />
          </Section>
        </div>
      </Container>
    </Layout>
  );
};

export default Detail;

export const pageQuery = graphql`
  query DetailQuery($id: Int!, $name: String!) {
    pokemon {
      evolutionChain(id: $id) {
        chain {
          species {
            name
            order
            names {
              name
            }
            imageFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          evolvesTo {
            species {
              name
              order
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            evolvesTo {
              species {
                name
                order
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              evolvesTo {
                species {
                  name
                  order
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
          }
        }
      }
      pokemon(nameOrId: $name) {
        id
        name
        types {
          type {
            name
          }
        }
        abilities {
          ability {
            id
            name
            names {
              name
              language {
                name
                url
              }
            }
          }
        }
        species {
          name
          names {
            name
          }
        }
        height
        weight
        moves {
          move {
            id
            name
            names {
              name
              language {
                name
                url
              }
            }
          }
        }
        imageFile {
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
