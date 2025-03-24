import { ContextPage } from "../context/contextPage";
import { useContext } from "react";
export const usePageContext = () => {
  const {
    activeModalCarta,
    itemsPreview,
    modalCarta,
    modalItem,
    setModalCarta,
    setModalItem,
    activeModalItem,
    item,
  } = useContext(ContextPage);
  return {
    activeModalCarta,
    itemsPreview,
    modalCarta,
    modalItem,
    setModalCarta,
    setModalItem,
    activeModalItem,
    item,
  };
};
