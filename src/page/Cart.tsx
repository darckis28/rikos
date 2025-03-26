import { useEffect } from "react";
import ItemCart from "../components/ItemCart";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { itemsCart, totalCart, quantityCart, resetCart } = useCart();

  function enviarPedidoWhatsApp() {
    const mensaje = `*Pedido:*%0A%0A${itemsCart
      .map((item) => `- ${item.title} x${item.qty} - S/${quantityCart}`)
      .join("%0A")}%0A%0A*Total: S/${totalCart.toFixed(2)}*`;
    const url = `https://wa.me/${914135701}?text=${mensaje}`;
    window.open(url, "_blank");
    resetCart();
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-2 py-8  sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl uppercase">
              Tu Orden
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {itemsCart.length > 0 ? (
                itemsCart.map((item) => (
                  <ItemCart
                    key={item.id}
                    item={item}
                  />
                ))
              ) : (
                <h3 className="font-bold text-3xl  ">Tu carrito esta vacio</h3>
              )}
            </ul>
            {itemsCart.length > 0 && (
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className=" w-full max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>S/{totalCart}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      onClick={enviarPedidoWhatsApp}
                      className="block rounded-sm uppercase bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 cursor-pointer"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
