import { Outlet } from "react-router-dom";
import Message from "../components/Message";
import Footer from "../sections/Footer";
import Navegation from "../sections/Navegation";
import PreviewDescription from "../sections/PreviewDescription";
import PreviewMenu from "../sections/PreviewMenu";

const Layout = () => {
  return (
    <div className="container-page relative">
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
