import { useContext } from "react";
import { Store } from "../store/config/config";
import { toggleStatusOpenModal } from "../store/modules/modal/actions";

export function useToggleModal() {
  const [state, dispatch] = useContext(Store);

  const { modal } = state;

  const toggleStatusModal = status => dispatch(toggleStatusOpenModal(status));

  return [modal.isOpened, toggleStatusModal];
}
