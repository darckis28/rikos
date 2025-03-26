import { useState } from "react";
import { ContextPage } from "./contextPage";
import { CartaType, item } from "../interfaces/interface";
interface Props {
  children: React.ReactNode;
}
const PagePovaider = ({ children }: Props) => {
  const [modalCarta, setModalCarta] = useState(false);
  const [modalItem, setModalItem] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [item, setItem] = useState<item>({} as item);
  const [itemsPreview, setItemsPreview] = useState<CartaType>({} as CartaType);

  const activeModalCarta = (items: CartaType): void => {
    setModalCarta(!modalCarta);
    setItemsPreview(items);
  };
  const activeModalItem = (item: item): void => {
    setModalItem(!modalItem);
    setItem(item);
  };
  return (
    <ContextPage.Provider
      value={{
        modalCarta,
        modalItem,
        activeModalCarta,
        itemsPreview,
        setModalCarta,
        setModalItem,
        activeModalItem,
        item,
        showNav,
        setShowNav,
      }}
    >
      {children}
    </ContextPage.Provider>
  );
};
export default PagePovaider;
