import { CheckoutHeader } from "./CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import CartIcon from "../../../public/images/icons/cart-favicon.png";

export function CheckoutPage({ cartProducts, loadCartProducts }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  //Obtener las opciones de envío de backend
  useEffect(() => {
    /*axios
      .get("/api/delivery-options?expand=estimatedDeliveyTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });*/

    const getDeliveryData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveyTime"
      );
      setDeliveryOptions(response.data);
    };

    getDeliveryData();
  }, []);

  useEffect(() => {
    const getPaymentData = async () => {
      let response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    getPaymentData();
  }, [cartProducts]);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href={CartIcon} />

      <CheckoutHeader cartProducts={cartProducts} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cartProducts={cartProducts}
            loadCartProducts={loadCartProducts}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCartProducts={loadCartProducts} />
        </div>
      </div>
    </>
  );
}
