import { FiltersContext } from "../context/filters.jsx";
import { useContext } from "react";

export function useFilters() {
  /*const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });*/

  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (product.category === filters.category || filters.category === "all") &&
        product.price >= filters.minPrice
      );
    });
  };

  return { filterProducts, filters, setFilters };
}
