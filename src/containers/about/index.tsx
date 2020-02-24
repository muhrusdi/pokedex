import React from "react";
import Layout from "../layouts";
import Container from "components/container";

const About = () => {
  return (
    <Layout>
      <Container type="xs">
        <h2>About</h2>
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
      </Container>
    </Layout>
  );
};

export default About;
