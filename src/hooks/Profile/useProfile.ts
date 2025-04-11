import { useState } from "react";

interface ModalType {
    password: boolean;
    profile: boolean;
  }

export const useProfile = () => {
  const [openModal, setOpenModal] = useState<ModalType>({
    password:false,
    profile:false,
  });


  const closeModal = () => setOpenModal({password:false, profile:false});

  return {
    openModal,
    closeModal,
    setOpenModal
  };
};
