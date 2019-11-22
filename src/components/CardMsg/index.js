import React, { useState } from "react";

import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo
} from "./card-msg.styles";

const CardMsg = ({
  userImage,
  userScreenName,
  text,
  className,
  setShowModal,
  showModal
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container className={className}>
      <Card
        // isSelected={isSelected}
        onClick={() => {
          // setIsSelected(!isSelected);
          setShowModal(!showModal);
        }}
      >
        <UserPhoto>
          <Photo src={userImage} />
        </UserPhoto>
        <UserName>{userScreenName}</UserName>
        <UserMsg>{text}</UserMsg>
      </Card>
    </Container>
  );
};

export default CardMsg;
