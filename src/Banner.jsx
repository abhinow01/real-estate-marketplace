import React from 'react';
import Search from './Search';
import Footer from './footer';

const Banner = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:mt-4 md:mx-4 md:p-4'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-center md:p-2'>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold text-purple-400 md:text-left md:mr-4'>
            Rent
          </h1>
          <h1 className='text-4xl font-bold text-black md:text-left'>
            Your dream house with us
          </h1>
        </div>
        <div className='p-2 md:pl-4'>
          <p className="lorem-ipsum text-md font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='p-4'>
        <img src='/house-banner.png' alt='House Banner'/>
      </div>
    </div>
    <Search/>
    <Footer/>
    </>
  );
};

export default Banner;
