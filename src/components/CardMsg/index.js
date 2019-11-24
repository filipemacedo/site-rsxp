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
import { useTimeout } from "../../hooks/timeout.hook";

const CardMsg = ({
  userImage,
  image,
  userScreenName,
  text,
  timeToShow,
  className,
  id,
  openModalOnClick = true
}) => {
  const isFinishedTime = useTimeout(timeToShow);

  const [, toggleCardModal] = useToggleModal();
  const [, dispatch] = useContext(Store);

  const dispatchTweetInformations = () =>
    dispatch(setTweetInformations({ userImage, userScreenName, text, image }));

  return (
    isFinishedTime && (
      <Container className={className} isCompleted={isFinishedTime} key={id}>
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
          <UserMedia src={image} />
        </Card>
      </Container>
    )
  );
};

export default React.memo(CardMsg);
