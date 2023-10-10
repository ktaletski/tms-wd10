import ReactDOM from "react-dom/client";

import "./index.css";

import { App } from "./ReactRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
