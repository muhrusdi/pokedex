import React from "react";
import styled from "styled-components";
import { randomColor } from "utils";

export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin-top: 10px;
  li {
    margin-right: 8px;
  }
`;

export const Type = styled.span`
  background: ${({ color }) => color};
  padding: 4px 8px;
  border-radius: 20px;
  text-transform: capitalize;
  color: #fff;
`;

const defaultProps = {
  data: []
};

type Type = {
  name: string;
};

interface Props {
  data: Type[];
}

const Types: React.FC<Props> = ({ data }) => (
  <List>
    {data.length &&
      data.map((item, i) => (
        <li>
          <Type color={randomColor[i]}>{item.type.name}</Type>
        </li>
      ))}
  </List>
);

Types.defaultProps = defaultProps;

export default Types;
