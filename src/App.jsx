import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import React, { useEffect } from "react";
import { Layout } from "components/Layout";
import { Home } from "components/pages/Home";
import { About } from "components/pages/About";
import { Cart } from "components/pages/Cart";
import { Checkout } from "components/pages/Checkout";
import { Contact } from "components/pages/Contact";
import { Product } from "components/pages/Product";
import { Shop } from "components/pages/Shop";
import { Account } from "components/pages/account/Account";
import { Login } from "components/pages/Login";
import { Logout } from "components/pages/account/Logout";
import { Register } from "components/pages/Register";
import { Order } from "components/pages/Order";
import { DeleteAccount } from "components/pages/account/DeleteAccount";
import { ChangePassword } from "components/pages/account/ChangePassword";
import { NotFound } from "components/pages/NotFound";
import { ReadMore } from "components/pages/ReadMore";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/read more" element={<ReadMore />} />
          <Route
            path="/product/:id"
            element={<Product />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/delete-account"
            element={<DeleteAccount />}
          />
          <Route
            path="/change-password"
            element={<ChangePassword />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
