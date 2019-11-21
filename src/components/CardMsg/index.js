import React, { useState, useEffect } from "react";

import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo
} from "./card-msg.styles";

export default function CardMsg() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container>
      <Card isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
        <UserPhoto>
          <Photo src={"./assets/teste.png"} />
        </UserPhoto>
        <UserName>Vinizera</UserName>
        <UserMsg>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          leo sit amet nulla semper iaculis. Aliquam ac enim neque. Fusce id
          vehicula tellus, et pretium nulla. #RSXP2019
        </UserMsg>
      </Card>
    </Container>
  );
}
