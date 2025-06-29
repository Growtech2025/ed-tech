import "./Card.css"
import {useNavigate} from "react-router-dom"; 
function SubscriptionCard() {
 const Navigate=useNavigate()
function placeorder(){
Navigate ("/order")
}
    return (
    <div className="main">
        <div className="subscription-card">
            <h2 className="plan-title">SUBSCRIPTION PLAN</h2>
            <p className="plan-description">Access all study materials, mock tests, and live classNamees.</p>

            <div className="price">₹499 <span className="price-period">/month</span></div>

            <ul className="features">
                <li>✔ Unlimited PDFs & Notes</li>
                <li>✔ Weekly Mock Tests</li>
                <li>✔ Expert Doubt Support</li>
                <li>✔ Certificate of Completion</li>
            </ul>

            <button className="subscribe-btn" onClick={placeorder}>Subscribe Now</button>
            <p className="note">Cancel anytime. No hidden charges.</p>
        </div>
    </div>
    )
}
export default SubscriptionCard;