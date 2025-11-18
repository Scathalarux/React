import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

window.axios = axios;

function App() {
  const [cartProducts, setCartProducts] = useState([]);


  const loadCartProducts = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCartProducts(response.data);
    };


  useEffect(() => {
    /*// Elementos cesta
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCartProducts(response.data);
    });*/
    loadCartProducts();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cartProducts={cartProducts} loadCartProducts={loadCartProducts}/>} />
      <Route
        path="checkout"
        element={<CheckoutPage cartProducts={cartProducts} loadCartProducts={loadCartProducts}/>}
      />
      <Route
        path="orders"
        element={<OrdersPage cartProducts={cartProducts} loadCartProducts={loadCartProducts}/>}
      />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cartProducts={cartProducts} />}
      />
      <Route path="*" element={<NotFoundPage cartProducts={cartProducts} />} />
    </Routes>
  );
}

export default App;
