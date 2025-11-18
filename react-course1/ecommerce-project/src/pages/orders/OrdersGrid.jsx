import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrderHeader } from "./OrderHeader";

export function OrdersGrid({ orders, loadCartProducts }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} loadCartProducts={loadCartProducts}/>
          </div>
        );
      })}
    </div>
  );
}
