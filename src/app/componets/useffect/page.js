"use client"
import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={" p-8"}>
      <h3 className={"text-2xl p-4"}>UseEffect hook</h3>
      <p>This example fetches and displays product titles from a fake store API with the help of useeffect hook.</p>
      <h1>Products</h1>
      <ul className={"p-2"}>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
