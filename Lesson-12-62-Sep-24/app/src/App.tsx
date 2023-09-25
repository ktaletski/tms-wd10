import { FC } from "react";

import "./App.css";

import { Counter } from "./Counter__reconciliation_elem_type";

interface Props {
  showLogo?: boolean;
}

export const App: FC<Props> = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};
