const Navegation = () => {
  return (
    <nav className="bg-red-800 px-5  flex justify-between items-center border-b border-black/20">
      <a href="#">
        <img
          src="/logo.png"
          alt="logo de polleria rikos"
          className="invert w-24"
        />
      </a>
      <div className="flex items-center gap-2 uppercase text-sm">
        <ul className="flex text-white space-x-5">
          <li className="py-1">inicio</li>
          <li className="bg-yellow-500 py-1 px-2 rounded-lg font-bold">
            ordenar aqui
          </li>
          <li className="py-1">promociones</li>
          <li className="py-1">Sobre nosotros</li>
        </ul>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg">
          carrito
        </button>
      </div>
    </nav>
  );
};
export default Navegation;
