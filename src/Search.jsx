import React, { useState, useEffect } from 'react';
import { useHouseContext } from './HouseContext';
import { Link } from 'react-router-dom';

const Search = () => {
  const { properties, filterProperties } = useHouseContext();
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleSearch = () => {
    const filters = {
      location: location || undefined,
      priceRange: priceRange || undefined,
      bedrooms: bedrooms || undefined,
    };
    const filtered = filterProperties(filters);
    setFilteredProperties(filtered);
  };

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  useEffect(() => {
    handleSearch();
  }, [location, priceRange, bedrooms]);

  return (
    <div className="container mx-auto py-8 mt-2">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Location</option>
            {Array.from(new Set(properties.map((property) => property.location))).map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="block w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Price Range</option>
            <option value="0-2000">$0 - $2000</option>
            <option value="2001-4000">$2001 - $4000</option>
            <option value="4001-6000">$4001 - $6000</option>
          </select>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="block w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
          </select>
        </div>
        {/* <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <Link key={property.id} to={`/property/${property.id}`} className="w-full">
            <div className="border p-4 rounded-md">
              <img src={property.image} alt={property.title} className="mb-2 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.description}</p>
              <p className="text-gray-800 font-semibold">${property.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
