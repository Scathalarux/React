import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

//Crear contexto, que es lo que se va a consumir
export const CartContext = createContext();

//Crear provider que es el que permite el acceso al contexto
export function CartProvider({ children }) {
  /*  ALTERNATIVA a useReducer
  
 const [cart, setCart] = useState([]);

  //const addtoCart = (product) => setCart([...cart, product]);
  const addToCart = (product) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    //Producto dentro del carrito
    if (productInCartIndex >= 0) {
      //Alternativa 1: structureClone --> hace copia profunda y no superficial (como '...')
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //Producto no está en carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => product.id === item.id);

    //Producto dentro del carrito
    if (productInCartIndex >= 0) {
      //Alternativa 1: structureClone --> hace copia profunda y no superficial (como '...')
      const newCart = structuredClone(cart);
      if (newCart[productInCartIndex].quantity > 1) {
        newCart[productInCartIndex].quantity -= 1;
      } else {
        newCart.pop(productInCartIndex);
      }
      return setCart(newCart);
    }
  };

  const clearCart = () => setCart([]);*/

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    /*<CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >*/
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
