import { useState } from "react";

interface ModalInfo {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
type UseModal = (initialState: boolean) => ModalInfo;

const useModal: UseModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
