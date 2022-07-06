import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import AboutUs from './pages/AboutUs/aboutUs';
import Collections from './pages/Collections/collections';
//import Ardent from './pages/Collections/MainItems/1.Ardent/ardent';
//import Blance from './pages/Collections/MainItems/2.Blance/blance';
//import Breeze from './pages/Collections/MainItems/3.Breeze/breeze';
//import Elegance from './pages/Collections/MainItems/4.Elegance/elegance';


import ContactUs from './pages/Contact Us/contactUs';
import Features from './pages/Features/features';
import ProductFeatures from './pages/ProductFeatures/productFeatures';
// <Route path="/collections" element={<Collections/>} />
//<Route path="/ardent" element={<Ardent/>} />
//<Route path="/blance" element={<Blance/>} />
//<Route path="/breeze" element={<Breeze/>} />
//<Route path="/elegance" element={<Elegance/>} />

export default function App() {
  return (
  
   <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<ContactUs/>} />
           <Route path="/about" element={<AboutUs/>} />
           <Route path="/product" element={<ProductFeatures/>} />
           <Route path="/ardent" element={<Collections/>} />

         
         
          

     </Routes>
     
   </BrowserRouter>

  
  
  
    )
}

