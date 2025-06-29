import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 500;
  const total = quantity * price;

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 0));

  const handleDelete = () => alert('Item removed from cart.');

  return (
    <div className="cart-page">
      {/* Left Side - Product Card */}
      <div className="cart-left">
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNwLdQvBFcwguPJYwZ4lKqkENTLre7Hzj-w&s"
            alt="Product"
            className="product-image"
          />
          <div className="product-info">
            <h2>The Secret</h2>
            <p className="description">
               It is based on the belief of the pseudoscientific law of attraction,
                which claims that thought alone can influence objective circumstances within one's life
            </p>
            <p className="price">Price: ₹{price} /-</p>

            <div className="quantity-section">
              <button onClick={decrease}>−</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>

            <div className="total">Total: ₹{total}</div>

            <button className="delete-btn" onClick={handleDelete}>🗑 Remove</button>
          </div>
        </div>
      </div>

      {/* Right Side - Invoice & Shipping Info */}
      <div className="cart-right">
        <h3>Order Summary</h3>
        <p><strong>Product:</strong>The Secret Book</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Price per item:</strong> ₹{price}</p>
        <p><strong>Total:</strong> ₹{total}</p>

        <hr />

        <h4>Shipping Information</h4>
        <p>Name: Adarsh YAdav</p>
        <p>Address: 123 Street,Indore, India</p>
        <p>GST Cost: 18%</p>
        <p>Shipping Cost: ₹0</p>
        <h3>Total Amount: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Cart;
