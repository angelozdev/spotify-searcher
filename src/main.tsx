import React, { StrictMode } from "react";
import { createRoot } from "react-dom";
import "normalize.css";

import "styles/index.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Container shouldn't be null");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
