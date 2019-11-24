import React, { useContext } from "react";
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
        <UserMedia src="./Assets/teste_.png"/>
      </Card>
    </Container>
  );
};

export default CardMsg;
