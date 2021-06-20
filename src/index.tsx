import { StrictMode } from "react";
import { render } from "react-dom";
import "normalize.css";

import "styles/index.css";
import App from "./App";

const container = document.getElementById("root");

function RootComponent() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render(<RootComponent />, container, () => {
  console.log("RENDERED");
});
