import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CardItemDetails({ cartProduct, loadCartProducts }) {
  const [updatedQuantity, setUpdatedQuantity] = useState(false);
  const [newQuantity, setNewQuantity] = useState(`${cartProduct.quantity}`);
console.log(updatedQuantity);
  const deleteProduct = async () => {
    await axios.delete(`/api/cart-items/${cartProduct.productId}`);
    await loadCartProducts();
  };
  
  const updateProductQuantity = async () => {
    if (updatedQuantity) {
      const quantity = Number(newQuantity);
      
      await axios.put(`/api/cart-items/${cartProduct.productId}`, {
        quantity: quantity,
      });
      
      await loadCartProducts();

      setUpdatedQuantity(false);

    }else{
      setUpdatedQuantity(true);
    }

  };


  const updateNewQuantity = (event) => {
    setNewQuantity(event.target.value);
  };

  const keyDownHandler = (event) => {
    if(event.key === 'Enter'){
      updateProductQuantity();
    }
    if(event.key === 'Escape'){
      setNewQuantity(cartProduct.quantity);
      setUpdatedQuantity(false);
    }
  };

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
            {updatedQuantity ? (
              <input
                className="new-quantity-label"
                type="text"
                value={newQuantity}
                onChange={updateNewQuantity}
                onKeyDown={keyDownHandler}
              />
            ) : (
              <span className="quantity-label">{cartProduct.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateProductQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteProduct}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
