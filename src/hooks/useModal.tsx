import { useState } from "react";

type ModalHookReturnType = [boolean, () => void, () => void];

export const useModal = (initialValue = false): ModalHookReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
