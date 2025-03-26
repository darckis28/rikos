import CardMenu from "../components/CardMenu";
import Modal from "../components/Modal";
import Title from "../components/Title";
import BtnClose from "../components/BtnClose";
import { usePageContext } from "../hooks/usePageContext";

const PreviewMenu = () => {
  const { modalCarta, setModalCarta, itemsPreview, activeModalItem } =
    usePageContext();

  const handleShow = () => {
    setModalCarta(!modalCarta);
  };

  return (
    <Modal show={modalCarta}>
      <header className="flex items-center justify-between py-4 px-5">
        <Title>{itemsPreview.title}</Title>
        <BtnClose handleShow={handleShow} />
      </header>

      <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 pb-8 px-8  ">
        {itemsPreview.items?.map((promo, idx) => (
          <CardMenu
            actionItem={activeModalItem}
            key={idx}
            item={promo}
          />
        ))}
      </ul>
    </Modal>
  );
};
export default PreviewMenu;
