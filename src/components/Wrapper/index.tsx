import React, { PropsWithChildren } from "react";

import { Container } from "./wrapper.styles";

function Wrapper({ children }: PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

export default Wrapper;
