import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./OrdersPage.css";
import { OrdersGrid } from "./OrdersGrid";
import OrderIcon from '../../../public/images/icons/orders-favicon.png'

export function OrdersPage({ cartProducts, loadCartProducts }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={OrderIcon}
      />

      <Header cartProducts={cartProducts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCartProducts={loadCartProducts}/>
      </div>
    </>
  );
}
