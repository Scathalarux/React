import { formatMoney } from "../../utils/money";

export function CardItemDetails({ cartProduct }) {
  return (
    <>
      <img className="product-image" src={cartProduct.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartProduct.product.name}</div>
        <div className="product-price">
          {formatMoney(cartProduct.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <span className="quantity-label">{cartProduct.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
          <span className="delete-quantity-link link-primary">Delete</span>
        </div>
      </div>
    </>
  );
}
