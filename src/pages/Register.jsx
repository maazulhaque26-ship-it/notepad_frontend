import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../services/ApiEndPoint';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: ''
  });

const handleSubmit = async (e)=>{
  e.preventDefault()
  try{
  const request = await post('/auth/register' , value)
  const response = request.data
  if(response.success){
    toast.success(response.message)
    navigate('/login')
  }
  }catch(err){
    if(err.response){
          toast.error(err.response.data.message)
    }
    console.log(err)
  }
}

const handleChange = (e) => {
  setValue({
    ...value,
    [e.target.name]: e.target.value
  })
}

  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '400px', borderRadius: '15px', border: 'none' }}>
        <div className="card-body">
          <h2 className="text-center mb-4 fw-bold">Register</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-3">
              <label className="form-label text-secondary small">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                style={{ backgroundColor: '#f8f9fa' }}
                value={value.username}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label text-secondary small">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                style={{ backgroundColor: '#f8f9fa' }}
                value={value.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="form-label text-secondary small">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                style={{ backgroundColor: '#f8f9fa' }}
                value={value.password}
                onChange={handleChange}
              />
            </div>

            {/* Register Button */}
            <button 
              type="submit" 
              className="btn btn-success w-100 mb-3 py-2 fw-bold"
              style={{ backgroundColor: '#198754', border: 'none' }}
            >
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <span className="text-secondary small">Already have an account? </span>
            <Link to="/login" className="text-decoration-underline small">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;