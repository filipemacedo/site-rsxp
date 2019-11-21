import React, { useState } from "react";

import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo
} from "./card-msg.styles";

export default function CardMsg({ text, userScreenName, userImage }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container>
      <Card isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
        <UserPhoto>
          <Photo src={userImage} />
        </UserPhoto>
        <UserName>{userScreenName}</UserName>
        <UserMsg>{text}</UserMsg>
      </Card>
    </Container>
  );
}
