import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPriceChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="range"
            name="price"
            id={minPriceFilterId}
            min="0"
            max="2000"
            onChange={handleMinPriceChange}
            value={filters.minPrice}
          />
          <span>{filters.minPrice} €</span>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id={categoryFilterId}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skin care</option>
          </select>
        </div>
      </section>
    </>
  );
}
