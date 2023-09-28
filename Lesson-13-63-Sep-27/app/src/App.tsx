import { FC } from "react";

import "./App.css";

import { Component } from "./List__reconciliation_key";

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
