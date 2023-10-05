import { FC } from "react";

import "./App.css";

import { Component } from "./Heuristics--dynamic-type";

interface Props {
  showLogo?: boolean;
}

export const App: FC<Props> = () => {
  return (
    <div className="App">
      <Component />
    </div>
  );
};
