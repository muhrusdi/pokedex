import styled from "styled-components";

export const Hero = styled.div`
  background: #03970c;
  padding: 24px 20px;
  border-radius: 20px;
`;

export const Section = styled.div`
  h3 {
    font-size: 22px;
    font-weight: bold;
  }
  margin-top: 30px;
  padding: 0 20px;
`;

export const InformationStyled = styled.div`
  margin-top: 20px;
  h4 {
    font-size: 18px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 8px;
      padding: 10px;
      border: 1px solid #ddd;
      margin-top: 10px;
      border-radius: 10px;
    }
  }
`;

export const EvolutionStyled = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  h3 {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const EvoItem = styled.div`
  padding: 10px;
  border-radius: 10px;
  height: 200px;
  border: 1px solid #ddd;
`;

export const EvoItemDesc = styled.div`
  margin-top: 10px;
  text-transform: capitalize;
`;
