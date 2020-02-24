import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../";

describe("Button Bookmark Component", () => {
  let toggle = false;

  const handleClick = () => {
    toggle = !toggle;
  };
  const { getByRole, rerender } = render(
    <Button toggle={toggle} onClick={handleClick} />
  );
  const button = getByRole("button");
  test("Should be white color by default", () => {
    // Assertion
    expect(button.querySelector("svg").getAttribute("fill")).toEqual("#fff");
  });
});
