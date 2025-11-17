import { CheckoutHeader } from "./CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import CartIcon from '../../../public/images/icons/cart-favicon.png';

export function CheckoutPage({ cartProducts }) {
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

    const getCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveyTime"
      );
      setDeliveryOptions(response.data);
    
      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    getCheckoutData();

  }, []);

  return (
    <>
      <title>Checkout</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={CartIcon}
      />

      <CheckoutHeader cartProducts={cartProducts}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cartProducts={cartProducts}
          />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
