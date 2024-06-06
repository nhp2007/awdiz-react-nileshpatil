import { useEffect, useState } from "react";
import axios from "axios";
import "../02-6/style.css"

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");

  async function GetProducts() {
    // alert("Hi from get Products.");
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // api call to backend
    GetProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div id="allproducts1">

        {allProducts.map((product) => (

          <div id="allproducts2">
            <img id="allproducts3" src={product.image} alt="/" />
            <p>Title : {product.title}</p>
            <p>Price : {product.price}</p>
            <p>category : {product.category}</p>
            <p>Rating : {product.rating.rate}</p>
          
          </div>

        ))}
      </div>
    </div>
  );
}

export default AllProducts;