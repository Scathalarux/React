import { CartContext } from "../context/cart";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);

  if(context === undefined){
    throw new Error('useCart must be defined within a CartProvider')
  }

  return context;
}
