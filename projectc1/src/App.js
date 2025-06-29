import SubscriptionCard from "./components/SubscriptionCard";
import "./components/Card.css"
import OrderForm from "./components/OrderForm";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<SubscriptionCard/>}/>
        <Route path="/order" element={<OrderForm/>}/>
      </Routes>
    </div>
  );
}


export default App;
