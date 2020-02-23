import React from "react";
import StateProvider from "contexts/state-context";
import "components/styles/styles.css";

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <StateProvider>{element}</StateProvider>;
  return ConnectedRootElement;
};
