import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleCart = ()=>{
    navigate('/cart');
  }
  return (
    <div className='flex items-center justify-center mt-2 '>
    <div className='flex flex-row justify-between p-4 items-center h-auto border border-b shadow-lg sticky w-full mx-4 '>
   <div className='font-bold text-3xl '>
   HomeLand 
   </div>
   <div className='flex flex-row justify-center items-center p-2 '>
   <div><button className='p-2 text-white font-bold text-lg bg-purple-400 rounded-lg ' onClick={handleCart}>Cart</button></div>
    <div> <button className='p-2 text-lg font-bold '>Sign up</button></div>
    <div><button className='p-2 text-white font-bold text-lg bg-purple-500 rounded-lg '>Log in</button></div>

   </div>
    </div>
    </div>
  )
}

export default Navbar
