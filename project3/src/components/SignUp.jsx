import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (role) => {
    const { fullname, email, password, confirmPassword } = formData;

   
    if (!fullname || !email || !password || !confirmPassword) {
      alert('Please fill out all the fields!');
      return;
    }

   
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

   
    console.log('Signup Data:', {
      ...formData,
      role,
    });

    alert(`Form submitted as ${role}`);
    navigate('/otp');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create your Account</h2>
        </div>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="fullname">Full name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Create password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Re-enter password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="button"
            className="signup-button"
            onClick={() => handleSubmit('buyer')}
          >
            Sign up as Buyer
          </button>

          <button
            type="button"
            className="signup-button"
            onClick={() => handleSubmit('seller')}
          >
            Sign up as Seller
          </button>
        </form>

        <div className="login-link">
          <Link to="/login" className="link">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
