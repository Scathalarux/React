import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
//import { products } from "../../starting-code/data/products";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";
import HomeIcon from '../../../public/images/icons/home-favicon.png'

export function HomePage({ cartProducts, loadCartProducts }) {
  const [products, setProducts] = useState([]);

  // Versión estándar de request
  /*fetch("http://localhost:3000/api/products")
    .then((response) => {
      if (response.ok && response.status === 200) {
        //Para obtener los datos
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    });*/

  // Versión con axios
  /* useEffect
      Para que la llamada se ejecute de forma controlada
      [] --> 1 ejecución --> creación del componente
  */
  useEffect(() => {
    //Listado de productos
    /*axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });*/

    // Usando async-await (por tendencia a usar async-await en lugar de promesas)
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={HomeIcon}
      />

      <Header cartProducts={cartProducts} />

      <div className="home-page">
        <ProductsGrid products={products} loadCartProducts={loadCartProducts}/>
      </div>
    </>
  );
}
