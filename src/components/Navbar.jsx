import React from 'react'
import { post } from '../../services/ApiEndPoint'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast' 

const Navbar = () => {
  const navigate = useNavigate() 

  const handleLogout = async () => {
    try {
      const request = await post('/auth/logout')
      const response = request.data
      
      if (response.success) {
        toast.success(response.message) 
        navigate('/login') 
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Logout failed!")
      }
      console.log(error)
    }
  }

  return (
    <div className='navbar'>
        <div className='container-fluid p-2 d-flex align-items-center'> 
            <input type="text" className='mt-3 searchinput form-control w-25' placeholder='Search..'/>
            <button className='btn btn-dark mx-3' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar