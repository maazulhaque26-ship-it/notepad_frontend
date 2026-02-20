import React from 'react'
import { FaPlus, FaUserCircle } from "react-icons/fa"; // Ek icon login ke liye
import { Link } from 'react-router-dom'; // Navigation ke liye

const Sidebar = () => {
  return (
    <div className='mt-5 mx-5 d-flex flex-column align-items-center' style={{height: '90vh'}}>
        <h1 className='fs-3 fw-bold'>LOGO</h1>
        
        
        <div 
          className='mt-5 rounded-circle d-flex justify-content-center align-items-center' 
          style={{backgroundColor:"black", height : "50px", width:"50px", cursor:"pointer"}} 
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal"
        >
          <FaPlus size={25} className='text-white' />
        </div>

        <div className='mt-auto mb-4'>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <div 
              className='rounded-circle d-flex justify-content-center align-items-center' 
              style={{backgroundColor:"#f8f9fa", border: "1px solid #ddd", height : "50px", width:"50px", cursor:"pointer"}}
              title="Login"
            >
              <FaUserCircle size={30} color="black" />
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Sidebar