import React from "react";
import Layout from "../layouts";
import Container from "components/container";

const About = () => {
  return (
    <Layout>
      <Container type="xs">
        <h2>About</h2>
        <p>
          This website provides a RESTful API interface to highly detailed
          objects built from thousands of lines of data related to Pokémon. We
          specifically cover the video game franchise
        </p>
        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <span>✅ React</span>
          </li>
          <li>
            <span>✅ Gatsby.js</span>
          </li>
          <li>
            <span>✅ GraphQL</span>
          </li>
          <li>
            <span>✅ Styled Components</span>
          </li>
          <li>
            <span>✅ React Testing Library</span>
          </li>
        </ul>
        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <span>
              ➡️ Demo <code>https://pokedex.muhrusdi.me/</code>
            </span>
          </li>
          <li>
            <span>
              ➡️ Github <code>https://github.com/muhrusdi/pokedex</code>
            </span>
          </li>
          <li>
            <span>
              ➡️ Codesandbox <code>https://codesandbox.io/s/pokedex-yq4i4</code>
            </span>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default About;
