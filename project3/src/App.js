
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import OtpVerification from './components/Otpverification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
         <Route path="*" element={<PageNotFound />} />
           <Route path="/otp" element={<OtpVerification />} />

      </Routes>
    </Router>
  );

} 

export default App;

