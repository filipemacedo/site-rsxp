import React, { useContext, useEffect, useState } from "react";
import { useToggleModal } from "../../hooks/toggle-modal.hook";
import { Store } from "../../store/config/config";
import { setTweetInformations } from "../../store/modules/modal/actions";
import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo,
  UserMedia
} from "./card-msg.styles";
import { useTimeout } from "../../hooks/timeout.hook";

const CardMsg = ({
  userImage,
  userScreenName,
  index,
  text,
  id,
  className,
  openModalOnClick = true
}) => {
  const time = 300 * (index + 1);

  const isFinishedTime = useTimeout(time);

  console.log(id);

  const [, toggleCardModal] = useToggleModal();
  const [, dispatch] = useContext(Store);

  const dispatchTweetInformations = () =>
    dispatch(setTweetInformations({ userImage, userScreenName, text }));

  return (
    isFinishedTime && (
      <Container className={className} key={id}>
        <Card
          onClick={() => {
            toggleCardModal(openModalOnClick);
            dispatchTweetInformations();
          }}
        >
          <UserPhoto>
            <Photo src={userImage} />
          </UserPhoto>
          <UserName>{userScreenName}</UserName>
          <UserMsg>{text}</UserMsg>
          <UserMedia src="./Assets/teste_.png"/>
        </Card>
      </Container>
    )
  );
};

export default CardMsg;
