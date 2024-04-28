import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { useHouseContext } from './HouseContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useHouseContext();

  const handleHomeNavigation = ()=>{
    navigate('/');
  }

  const handleCart = () => {
    navigate('/cart');
  }

  return (
    <div className='flex flex-col items-center justify-center mt-2'>
      <div className='flex flex-col p-4 border border-b shadow-lg sticky top-0 w-full mx-4'>
        <div className='font-bold text-3xl text-center mb-2'>
          <button onClick={handleHomeNavigation}>HomeLand</button>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <button className='p-2 text-white font-bold text-lg bg-purple-400 rounded-lg flex items-center justify-center mb-2' onClick={handleCart}>
            <CiShoppingCart style={{ height: '30px', width: '30px' }} />
            <span className='ml-1'>({cart.length})</span>
          </button>
          <div className='flex flex-col md:flex-row'>
            <button className='p-2 text-lg font-bold mb-2 md:mr-2'>Sign up</button>
            <button className='p-2 text-white font-bold text-lg bg-purple-500 rounded-lg'>Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
