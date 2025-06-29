import  { useState } from "react";
import "./Card.css"

const OrderForm = () => {
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState("");

  function  placeOrder () {
    if (/^\d{10}$/.test(phone)) {
      setNotification("Placing your order...");

      setTimeout(() => {
        setNotification(`✅ Order placed successfully! Notification sent to +91${phone}`);
        setPhone("");
      }, 1000);
    } else {
      setNotification("❌ Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="BOxDiv">
    <div className="order-container">
      <h2>📦 Place Your Order</h2>
      <input
        type="text"
        placeholder="Enter your mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={placeOrder}>Place Order</button>

      {notification && <div className="notification">{notification}</div>}
    </div>
    </div>
  );
};

export default OrderForm;
