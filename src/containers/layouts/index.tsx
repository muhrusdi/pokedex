import React from "react";
import Container from "components/container";
import SEO from "components/seo";
import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SEO />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
