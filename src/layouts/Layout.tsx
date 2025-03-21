import Message from "../components/Message";
import Footer from "../sections/Footer";
import Navegation from "../sections/Navegation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container-page">
      <div className="[grid-area:header]">
        <Message />
        <Navegation />
      </div>

      <main className="[grid-area:main]">{children}</main>
      <div className="[grid-area:footer]">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
