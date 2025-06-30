
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './MyCart.css';

const MyCart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="back-button">← Go back to shop</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.title} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price}</p>

                  <div className="quantity-control">
                    <button
                      onClick={() => decreaseQuantity(item.title)}
                      className="qty-btn"
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.title)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="remove-button"
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p className="total-price">Total: ₹{getTotal()}</p>
            <button onClick={clearCart} className="clear-button">🧹 Clear Cart</button>
            <button className="checkout-button">✅ Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
