import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../services/ApiEndPoint';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post('/auth/login', value);
      const response = request.data;

      if (response.success) {
        toast.success(response.message);
        // Token local storage mein save karna achhi practice hai
        localStorage.setItem("token", response.token); 
        navigate('/');
      }
    } catch (err) {
      // Backend se aane wala error message yahan pakda jayega
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Is server running?");
      }
      console.log("Login Error:", err);
    }
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='form-container border shadow p-5 rounded-4 bg-white' style={{ width: '400px' }}>
        <h2 className='text-center mb-4 fw-bold'>Login</h2>  
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input 
              type="email" 
              name='email' 
              className='form-control' 
              placeholder='Enter your email' 
              value={value.email} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input 
              type="password" 
              name='password' 
              className='form-control' 
              placeholder='Enter password' 
              value={value.password} 
              onChange={handleChange} 
              required
            />
          </div>

          <button type="submit" className='btn btn-success w-100 mb-3'>Login</button>

          <div className='text-center'>
            <p className='mb-0'>Don't have an account? <Link to='/register' className='text-decoration-none'>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;