import React, { useContext } from "react";
import { useToggleModal } from "../../hooks/toggle-modal.hook";

import {
  Container,
  Card,
  UserPhoto,
  UserName,
  UserMsg,
  Photo
} from "./card-msg.styles";
import { Store } from "../../store/config/config";
import { setTweetInformations } from "../../store/modules/modal/actions";

const CardMsg = ({
  userImage,
  userScreenName,
  text,
  className,
  openModalOnClick = true
}) => {
  const [, toggleCardModal] = useToggleModal();
  const [, dispatch] = useContext(Store);

  const dispatchTweetInformations = () =>
    dispatch(setTweetInformations({ userImage, userScreenName, text }));

  return (
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
  );
};

export default CardMsg;
