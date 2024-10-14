import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { useState } from 'react';
import Cart from './components/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(''); // Thêm trạng thái cho thông báo

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

    // Hiển thị thông báo sau khi thêm sản phẩm vào giỏ hàng
    setNotification(`${product.name} đã được thêm vào giỏ hàng!`);

    // Ẩn thông báo sau 2 giây
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  return (
    <BrowserRouter>
      <div>
        {/* Hiển thị thông báo nếu có */}
        {notification && (
          <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 1000,
          }}>
            {notification}
          </div>
        )}

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
