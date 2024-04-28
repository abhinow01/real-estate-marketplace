import React, { createContext, useState, useContext } from 'react';
import { data } from './data';

export const HouseContext = createContext();

// Export custom hook to use context
export const useHouseContext = () => useContext(HouseContext);

const HouseContextProvider = ({ children }) => {
  const [properties, setProperties] = useState(data.properties);
  const [cart, setCart] = useState([]);
  //   const [filters, setFilters] = useState({});

  const addToCart = (property) => {
    const existingItemIndex = cart.findIndex((item) => item.id === property.id);
    if (existingItemIndex !== -1) {
      // If property already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If property is not in the cart, add it with quantity 1
      setCart([...cart, { ...property, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const filterProperties = (filters) => {
    return properties.filter((property) => {
      // Apply filtering logic based on filters state
      const { location, priceRange, bedrooms } = filters;
      let passLocation = true;
      let passPrice = true;
      let passBedrooms = true;

      if (location && property.location !== location) {
        passLocation = false;
      }

      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-');
        if (property.price < parseInt(minPrice) || property.price > parseInt(maxPrice)) {
          passPrice = false;
        }
      }

      if (bedrooms && property.bedrooms !== parseInt(bedrooms)) {
        passBedrooms = false;
      }

      return passLocation && passPrice && passBedrooms;
    });
  };

  const value = {
    properties,
    cart,
    // filters,
    // setFilters,
    addToCart,
    removeFromCart,
    calculateTotalCost,
    filterProperties,
  };

  return <HouseContext.Provider value={value}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
