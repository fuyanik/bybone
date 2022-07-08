import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import Blance from './pages/1.Blance/collections';
import Breeze from './pages/2.Breeze/collections';
import Elegance from './pages/3.Elegance/collections';
import Enigma from './pages/4.Enigma/collections';
import Gleam from './pages/5.Gleam/collections';
import Infinity from './pages/6.Infinity/collections';
import Rose from './pages/7.Rose/collections';
import Sun from './pages/8.Sun/collections';
import Supreme from './pages/9.Supreme/collections';
import Tropical from './pages/10.Tropical/collections';




import AboutUs from './pages/AboutUs/aboutUs';
import Collections from './pages/Collections/collections';



import ContactUs from './pages/Contact Us/contactUs';
import Features from './pages/Features/features';
import Login from './pages/login';
import ProductFeatures from './pages/ProductFeatures/productFeatures';
import Register from './pages/register';


export default function App() {
  return (
  
   <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<ContactUs/>} />
           <Route path="/about" element={<AboutUs/>} />
           <Route path="/product" element={<ProductFeatures/>} />
           <Route path="/signup" element={<Register/>} />
           <Route path="/login" element={<Login /> } />
         
         
         
            <Route path="/ardent" element={<Collections/>} />
            <Route path="/blance" element={<Blance/>} />
            <Route path="/breeze" element={<Breeze/>} />
            <Route path="/elegance" element={<Elegance/>} />
            <Route path="/enigma" element={<Enigma/>} />
            <Route path="/gleam" element={<Gleam/>} />
            <Route path="/infinity" element={<Infinity/>} />
            <Route path="/rose" element={<Rose/>} />
            <Route path="/sun" element={<Sun/>} />
            <Route path="/supreme" element={<Supreme/>} />
            <Route path="/tropical" element={<Tropical/>} />


         
         
          

     </Routes>
     
   </BrowserRouter>

  
  
  
    )
}

