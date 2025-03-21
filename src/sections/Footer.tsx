import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#171E27] text-white lg:px-32 py-5 ">
      <div className="flex justify-center gap-10 mb-8">
        <div>
          <img
            src="/logo.png"
            alt="logo de polleria rikos"
            className="invert w-30"
          />
          <ul className="mb-5">
            <li className="flex gap-2 items-center  text-white/50">
              <span>
                <MdOutlineEmail />
              </span>
              <span className="text-sm ">ventas@rikos.pe</span>
            </li>
            <li className="flex gap-2 items-center  text-white/50">
              <span>
                <MdOutlineLocalPhone />
              </span>
              <span className="text-sm ">+51 900 009 000</span>
            </li>
          </ul>
          <div className="flex gap-2 text-2xl">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              {" "}
              <FaSquareInstagram />
            </a>
            <a href="#">
              {" "}
              <AiFillTikTok />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-10 mt-5">Nosotros</h3>
          <ul className="text-white/50 text-sm ">
            <li>Historia</li>
            <li>Trabaja con nosotros</li>
            <li>Terminos y condiciones</li>
          </ul>
          <div className="flex flex-col items-center bg-amber-400 px-3 py-1 mt-3 rounded-lg font-bold   ">
            <span className="text-bse uppercase -tracking-[1px]">
              Contacta con un asesor
            </span>
            <span className="text-3xl  -tracking-[1px]">+51 900 009 000 </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-10 mt-5">
            Nuestra carta
          </h3>
          <ul className="text-white/50 text-sm ">
            <li>Pollos a la brasa</li>
            <li>Brosters</li>
            <li>Chaufa</li>
            <li>Salchipapa</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-10 mt-5">
            Politicas y terminos
          </h3>
          <ul className="text-white/50 text-sm ">
            <li>Politica de privacidad</li>
            <li>Politica de cookies</li>
            <li>Terminos y condiciones</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white/50 text-xs">
        © 2025 Riko´s Todos los derechos reservados.
      </p>
    </footer>
  );
};
export default Footer;
