import React, { useState, useEffect } from "react";

import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo
} from "./card-msg.styles";
import { testNameToKey } from "jest-snapshot/build/utils";

export default function CardMsg() {
  // const [isSmall, setIsSmall] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => setIsSmall(!isSmall), 2000);

  //   return () => clearInterval(interval);
  // }, [isSmall]);

  return (
    <Container>
      <Card>
        <UserPhoto>
          <Photo src={'./Assets/teste.png'}/>
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
