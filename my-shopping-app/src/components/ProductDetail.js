import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: 100, description: 'Description of Product A' },
  { id: 2, name: 'Product B', price: 200, description: 'Description of Product B' },
  { id: 3, name: 'Product C', price: 300, description: 'Description of Product C' },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
