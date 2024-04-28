import React from "react";
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from "./Navbar"; 
import Banner from "./Banner";
import PropertyDetails from "./PropertyDetails";
import CartPage from "./CartPage";
import CheckoutForm from "./CheckoutForm";
function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/"  element={<Banner/>} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/cart"  element={<CartPage/>} />
      <Route path="/checkout" element={<CheckoutForm/>} />
      </Routes>
      </Router>
      
    </>
  )
}

export default App
