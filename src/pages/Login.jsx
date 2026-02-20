import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { post } from '../../services/ApiEndPoint';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(
    {email:"",
    password:""}
  )

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
    const request = await post('/auth/login' , value)
    const response = request.data
    console.log(response)
    if(response.success){
      toast.success(response.message)
      navigate('/')
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
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='form-container border shadow p-5 rounded-4 bg-white'>
        <h2 className='text-center mb-4 fw-bold'>Login</h2>  
        <form className='form-group mb-3' onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor="email" className='form-label' value={value.email}>Email</label>
            <input type="email" name='email' className='form-control' placeholder='Email' aria-label='Email'aria-describedby='basic-addon' onChange={handleChange}/>
          </div>

          <div className='form-group mb-3'>
            <label htmlFor="email" className='form-label' value={value.password} >Password</label>
            <input type="password" name='password' className='form-control' placeholder='password' aria-label='Email'aria-describedby='basic-addon' onChange={handleChange}/>
          </div>

          <button className='btn btn-success w-100 mb-3'>Login</button>

          <div className='text-center'>
            <p>Don't have an account ? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login