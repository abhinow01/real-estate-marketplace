import React , {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useHouseContext } from './HouseContext';
import { FaSackDollar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent } from "react-icons/md";

const PropertyDetails = () => {
    const {id} = useParams();
    const {properties} = useHouseContext();
    const [property,setProperty] = useState(null);
    const {addToCart} = useHouseContext();

    useEffect(()=>{
    const selectedProperty = properties.find(prop =>prop.id === parseInt(id));
    setProperty(selectedProperty);
    },[id,properties]);

    if(!property){
        return <div>Loading...</div>
    }
    const handleAddToCart =()=>{
        addToCart(property);
    }

  return (
    <div className='flex items-center justify-center mt-4 '>
    <div className='flex w-4/5 h-4/5 p-4 border border-b rounded-xl '>
        <div className='flex flex-row items-center justify-center '>
        <div className='h-full w-full p-2 rounded-lg '><img src={property.image} /></div>
        <div className='flex flex-col justify-center items-center '>
       <div className='font-bold text-3xl '><h2>{property.title}</h2></div> 
       <div className='text-lg font-thin m-2 flex items-center justify-center '>{property.description}</div>
       <div className='flex flex-row justify-between items-center font-light '>
        <div className='p-2 font-thin flex flex-row justify-center items-center '><div className='mr-2'><FaSackDollar /></div> <div>{property.price}</div></div>
        <div className='p-2 font-thin flex flex-row justify-center items-center '><div className='mr-2'><CiLocationOn /></div> <div>{property.location}</div></div>
        <div className='p-2 font-thin flex flex-row justify-center items-center '><div className='mr-2'><MdBedroomParent /></div> <div>{property.bedrooms}</div></div>
       </div>
       <div className='w-full flex items-center justify-center mt-4 p-2 '>
        <button className='w-4/5 bg-purple-600 text-white p-2 rounded-lg ' onClick={handleAddToCart}>Add to cart </button>
       </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default PropertyDetails