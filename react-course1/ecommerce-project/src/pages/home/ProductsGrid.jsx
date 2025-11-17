import { Product } from "./Product";

export function ProductsGrid({ products, loadCartProducts }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product product={product} loadCartProducts={loadCartProducts}/>
        );
      })}
    </div>
  );
}
