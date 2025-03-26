import { Outlet } from "react-router-dom";
import Message from "../components/Message";
import Footer from "../sections/Footer";
import Navegation from "../sections/Navegation";
import PreviewDescription from "../sections/PreviewDescription";
import PreviewMenu from "../sections/PreviewMenu";
import CartFixed from "../components/CartFixed";
import MenuNav from "../components/MenuNav";
import Promo from "../components/Promo";

const Layout = () => {
  return (
    <div className="container-page relative">
      <Promo />
      <MenuNav />
      <CartFixed />
      <div className="[grid-area:header]">
        <Message />
        <Navegation />
      </div>

      <main className="[grid-area:main] ">
        <Outlet />
      </main>
      <div className="[grid-area:footer]">
        <Footer />
      </div>
      <PreviewMenu />
      <PreviewDescription />
    </div>
  );
};
export default Layout;
