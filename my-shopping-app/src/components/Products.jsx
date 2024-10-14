import React from 'react';



const Products = () => {


  return (
    <div className="">
      <div className='cart'>
        <h1>Cart</h1>
      </div>
      <div className='products flex gap-5'>
        <div>
          <h1>Product name</h1>
          <img src="https://cdn.tgdd.vn/2023/11/content/iphone-800x450-1.jpg" alt="picture" className='w-44 h-44 object-cover'/>
          <p>Chi tiet</p>
        </div>
        <div>
          <h1>Product name</h1>
          <img src="https://cdn.tgdd.vn/Products/Images/42/223602/Slider/RV-iphone-13-1020x570.jpg" alt="picture" className='w-44 h-44 object-cover'/>
        </div>
        <div>
          <h1>Product name</h1>
          <img src="https://onewaymobile.vn/images/products/2024/08/26/original/12_1724647257.webp" alt="picture" className='w-44 h-44 object-cover'/>
        </div>
        <div>
          <h1>Product name</h1>
          <img src="https://applethanhdat.com/wp-content/uploads/2021/10/apple-iphone-13-pro-gold-128gb-chinh-hang1-scaled.jpg" alt="picture"className='w-44 h-44 object-cover'/>
        </div>
      </div>
    </div>
  );
};

export default Products;
