import React, { useContext } from "react";

import { Container, Modal } from "./card-modal.styles";
import { useToggleModal } from "../../hooks/toggle-modal.hook";
import { Store } from "../../store/config/config";

export default function CardModal() {
  const [isOpened, toggleStatusModal] = useToggleModal();
  const [state] = useContext(Store);

  const { modal } = state;
  const { tweetInformations } = modal;

  return (
    <Container isOpened={isOpened} onClick={() => toggleStatusModal(false)}>
      <Modal openModalOnClick={false} {...tweetInformations}></Modal>
    </Container>
  );
}
