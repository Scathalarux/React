import { DeliveryOptions } from "./DeliveryOptions";
import { CardItemDetails } from "./CardItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ deliveryOptions, cartProducts, loadCartProducts }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cartProducts.map((cartProduct) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartProduct.deliveryOptionId;
            }
          );

          return (
            <div key={cartProduct.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption}/>

              <div className="cart-item-details-grid">
                <CardItemDetails cartProduct={cartProduct} loadCartProducts={loadCartProducts}/>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartProduct={cartProduct}
                  loadCartProducts={loadCartProducts}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
