import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Layout from "../layouts/Layout";
import Menu from "../page/Menu";
import Promociones from "../page/Promociones";
import About from "../page/About";
import Cart from "../page/Cart";

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="promociones"
            element={<Promociones />}
          />
          <Route
            path="menu"
            element={<Menu />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="cart"
            element={<Cart />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
