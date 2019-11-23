import React from "react";

import { Container, Modal } from "./card-modal.styles";
import CardMsg from "../CardMsg";

export default function CardModal({ setShowModal, showModal }) {
  console.log(showModal)
  return (
    <Container show={showModal}>
      <Modal
        show={showModal}
        setShowModal={setShowModal}
        showModal={showModal}
        text="OLOCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
        userScreenName="Vinizera"
        userImage="https://pbs.twimg.com/profile_images/890312612155621382/0ozPVHm9_normal.jpg"
      >
      </Modal>
    </Container>
  );
}
