import styled from "styled-components";

export const Hero = styled.div`
  background: #ef5350;
  padding: 24px 20px;
  border-radius: 20px;
`;

export const InformationStyled = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  h3 {
    font-size: 22px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
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
  border: 1px solid #ddd;
  img {
    width: 100%;
  }
`;

export const EvoItemDesc = styled.div`
  margin-top: 10px;
`;
