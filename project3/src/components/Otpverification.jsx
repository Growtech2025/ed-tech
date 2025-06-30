import React, { useState } from 'react';
import './OtpVerification.css';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    if (otp === '123456') {
      alert('OTP Verified Successfully!');
      navigate('/dashboard');
    } else {
      alert('Invalid OTP! Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">OTP Verification</h2>
        <p className="otp-subtext">Enter the 6-digit code sent to your email</p>

        <input
          type="text"
          value={otp}
          onChange={handleChange}
          maxLength={6}
          placeholder="------"
          className="otp-input"
        />

        <button onClick={handleVerify} className="verify-button">
          Verify OTP
        </button>

        <p className="resend-text">
          Didn’t receive the code? <span className="resend-link">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
