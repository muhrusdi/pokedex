import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    line-height: 1;
  }
`;

export const PokemonItemStyled = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 18px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 2px 6px 16px rgba(135, 135, 135, 0.15),
    -4px -2px 16px rgba(255, 255, 255, 0.65);
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin-top: 10px;
  li {
    margin-right: 8px;
  }
`;

export const ImageStyled = styled.img`
  width: 100px;
`;

export const Type = styled.span`
  background: #${({ color }) => color};
  padding: 4px 8px;
  border-radius: 20px;
  color: #fff;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonBookmarkStyled = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
`;
