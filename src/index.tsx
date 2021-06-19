import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "normalize.css";
import "styles/global.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container shouln't be null");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
