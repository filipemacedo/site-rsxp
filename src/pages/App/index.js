import React from "react";

import { Container, Wrapper, CardGrid } from "./app.styles";
import CardMsg from "../../components/CardMsg";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <CardGrid>
          <CardMsg />
          <CardMsg />
          <CardMsg />
          <CardMsg />
          <CardMsg />
          <CardMsg />
          <CardMsg />
          <CardMsg />
        </CardGrid>
      </Wrapper>
    </Container>
  );
}
