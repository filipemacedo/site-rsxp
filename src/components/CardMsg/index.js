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
  Photo
} from "./card-msg.styles";
import { useTimeout } from "../../hooks/timeout.hook";

const CardMsg = ({
  userImage,
  userScreenName,
  index,
  text,
  className,
  openModalOnClick = true
}) => {
  const isFinishedTime = useTimeout(200 * index);

  const [, toggleCardModal] = useToggleModal();
  const [, dispatch] = useContext(Store);

  const dispatchTweetInformations = () =>
    dispatch(setTweetInformations({ userImage, userScreenName, text }));

  return (
    isFinishedTime && (
      <Container className={className}>
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
        </Card>
      </Container>
    )
  );
};

export default CardMsg;
