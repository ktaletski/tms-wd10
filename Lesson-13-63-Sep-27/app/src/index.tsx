import ReactDOM from "react-dom/client";

import "./index.css";
import "./reset.css";

import { Component } from "./Heuristics--dynamic-type";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<Component />);
