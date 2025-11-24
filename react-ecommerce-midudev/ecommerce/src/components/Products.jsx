import { useCart } from "../hooks/useCart.js";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import "./Products.css";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <span>{product.price} €</span>
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? 'red': 'green'}}
                  onClick={
                    isProductInCart
                      ? () => removeFromCart(product)
                      : () => addToCart(product)
                  }
                >
                  {isProductInCart ? (
                    <>
                      <RemoveFromCartIcon />
                    </>
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
