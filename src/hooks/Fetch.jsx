import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response
          .json()

          .then((products) => {
            setProducts(products);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return <div>Display All Products</div>;
};

export default Fetch;
