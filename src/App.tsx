import CartProvaider from "./context/CartProvider";
import PagePovaider from "./context/PagePovaider";
import { RoutesPage } from "./routers/router";

const App = () => {
  return (
    <CartProvaider>
      <PagePovaider>
        <RoutesPage />
      </PagePovaider>
    </CartProvaider>
  );
};
export default App;
