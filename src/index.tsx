import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";

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
