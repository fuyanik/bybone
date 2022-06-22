import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import AboutUs from './pages/AboutUs/aboutUs';
import ContactUs from './pages/Contact Us/contactUs';
import Features from './pages/Features/features';

export default function App() {
  return (
  
   <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<ContactUs/>} />
           <Route path="/about" element={<AboutUs/>} />
           <Route path="/features" element={<Features/>} />

     </Routes>
     
   </BrowserRouter>

  
  
  
    )
}

