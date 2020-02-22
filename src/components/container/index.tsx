import styled from "styled-components";

const defaultProps = {
  gutter: 16,
  types: "default"
};

type Props = {
  gutter: number;
  type: string;
} & typeof defaultProps;

const Container = styled.div(
  (props: Props) => ({
    padding: `0 ${props.gutter}px`,
    margin: "0 auto"
  }),
  (props: Props) => {
    switch (props.type) {
      case "xl": {
        return {
          maxWidth: 1200
        };
      }
      case "lg": {
        return {
          maxWidth: 992
        };
      }
      case "md": {
        return {
          maxWidth: 867
        };
      }
      case "sm": {
        return {
          maxWidth: 576
        };
      }
      default:
        return {
          maxWidth: "initial"
        };
    }
  }
);

Container.defaultProps = defaultProps;

export default Container;
