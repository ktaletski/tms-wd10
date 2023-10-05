import ReactDOM from "react-dom/client";

import "./index.css";
import "./reset.css";

import { App } from "./React-memo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
