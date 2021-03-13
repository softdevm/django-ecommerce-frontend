import React, { useEffect, useState } from "react";
import { getProducts } from "./helper/index";
import Base from "./Base";
import Card from "./Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base>
      <h1>Hello World from Home</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-3 mb-4">
            <Card product={product} />
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Home;
