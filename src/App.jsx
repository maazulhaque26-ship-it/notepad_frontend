import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Toaster} from 'react-hot-toast'


const App = () => {
  return (
   <BrowserRouter>
   <Toaster/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
   </BrowserRouter>
  )
}


export default App