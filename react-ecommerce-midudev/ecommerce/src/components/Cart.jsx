import { useId } from "react";
import {
  ClearCartIcon,
  RemoveFromCartIcon,
  AddToCartIcon,
  CartIcon,
} from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

function CartItem({ product, addToCart, removeFromCart }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />

      <div>
        <h3>{product.title}</h3>
        <span>{product.price * product.quantity}€</span>
      </div>
      <footer>
        <small>Qty: {product.quantity}</small>
      </footer>
      <button onClick={addToCart}>
        <AddToCartIcon />
      </button>
      <button onClick={removeFromCart}>
        <RemoveFromCartIcon />
      </button>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeFromCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <CartItem key={product.id}
                product={product}
                addToCart={()=>addToCart(product)}
                removeFromCart={()=>removeFromCart(product)}
              />
            );
          })}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
