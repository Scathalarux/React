import "./Footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      <h4>Ecommerce</h4>
      <span>@midudev</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <p>{JSON.stringify(filters, null, 2)}</p>
      <p>{JSON.stringify(cart, null, 2)}</p>
    </footer>
  );
}
