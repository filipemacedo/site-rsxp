import React, { useState, useEffect } from "react";

import { Container, Title, TitleWrap } from "./card-msg.styles";

export default function CardMsg() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsSmall(!isSmall), 2000);

    return () => clearInterval(interval);
  }, [isSmall]);

  return (
    <Container>
      <Title>Filipe</Title>
      <TitleWrap small={isSmall}>
        <Title>Vinizera</Title>
      </TitleWrap>
    </Container>
  );
}
