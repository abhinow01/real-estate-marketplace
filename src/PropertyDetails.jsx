import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHouseContext } from './HouseContext';
import { FaSackDollar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent } from "react-icons/md";

const PropertyDetails = () => {
    const { id } = useParams();
    const { properties } = useHouseContext();
    const [property, setProperty] = useState(null);
    const { addToCart } = useHouseContext();

    useEffect(() => {
        const selectedProperty = properties.find(prop => prop.id === parseInt(id));
        setProperty(selectedProperty);
    }, [id, properties]);

    if (!property) {
        return <div>Loading...</div>
    }

    const handleAddToCart = () => {
        addToCart(property);
    }

    return (
        <div className='flex flex-col items-center justify-center mt-4'>
            <div className='w-4/5 p-4 border border-b rounded-xl'>
                <img src={property.image} alt={property.title} className='w-full rounded-lg mb-4 flex items-center justify-center' />
                <div className='text-center'>
                    <h2 className='font-bold text-3xl'>{property.title}</h2>
                    <p className='text-lg font-thin m-2'>{property.description}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center font-light'>
                    <div className='p-2 font-thin flex items-center'><FaSackDollar className='mr-2' />{property.price}</div>
                    <div className='p-2 font-thin flex items-center'><CiLocationOn className='mr-2' />{property.location}</div>
                    <div className='p-2 font-thin flex items-center'><MdBedroomParent className='mr-2' />{property.bedrooms}</div>
                </div>
                <div className='w-full flex items-center justify-center mt-4'>
                    <button className='w-full md:w-4/5 bg-purple-600 text-white p-2 rounded-lg' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;
