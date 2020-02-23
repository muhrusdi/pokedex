import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonBookmarkStyled = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
`;

const ButtonBookmark = ({ toggle = false, onClick }) => {
  const [dataToggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(toggle);
  }, [toggle]);

  const handleClick = e => {
    setToggle(t => !t);
    onClick(dataToggle, e);
  };

  return (
    <ButtonBookmarkStyled onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={dataToggle ? "#ffc107" : "#fff"}
        stroke={dataToggle ? "transparent" : "#03970c"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </ButtonBookmarkStyled>
  );
};

export default ButtonBookmark;
