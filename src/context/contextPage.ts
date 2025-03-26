import { createContext } from "react";
import { CartaType, item } from "../interfaces/interface";

interface ContextPage {
  modalCarta: boolean;
  modalItem: boolean;
  itemsPreview: CartaType;
  setModalCarta: (value: boolean) => void;
  activeModalCarta: (item: CartaType) => void;
  setModalItem: (value: boolean) => void;
  activeModalItem: (item: item) => void;
  item: item;
  setShowNav: (value: boolean) => void;
  showNav: boolean;
}
export const ContextPage = createContext({} as ContextPage);
