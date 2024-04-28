import React from 'react';
import Search from './Search';
import Footer from './footer';

const Banner = () => {
  return (
    <>
    <div className='flex items-center justify-center '>
    <div className='flex flex-row items-center justify-center mt-4 h-auto mx-4 p-4 '>
      <div className='flex flex-col p-2'>
        <div className='flex'>
          <h1>
            <span className='text-4xl font-bold text-purple-400 px-2'>Rent</span>
            <span className='text-4xl font-bold text-black'>Your dream house with us</span>
          </h1>
        </div>
        <div className='p-2 text-md font-thin flex justify-center  '>
          <p className="lorem-ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='p-4 '>
        <img src='/house-banner.png'/>
      </div>
    </div>
    </div>
    <Search/>
    <Footer/>
    </>
  );
};

export default Banner;
