import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: 100, imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg"},
  { id: 2, name: 'Product B', price: 200, imgUrl: "https://cdn.tgdd.vn/Products/Images/42/223602/Slider/RV-iphone-13-1020x570.jpg"},
  { id: 3, name: 'Product C', price: 300, imgUrl: "https://applethanhdat.com/wp-content/uploads/2021/10/apple-iphone-13-pro-gold-128gb-chinh-hang1-scaled.jpg"},
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} 
            <Link to={`/product/${product.id}`}> View Details </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <img src={`${product.imgUrl}`} alt="picture" className='w-44 h-44 object-cover'/>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default ProductList;
