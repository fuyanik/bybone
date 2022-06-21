import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import { BrowserRouter } from 'react-router-dom';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import ContactUs from './pages/Contact Us/contactUs';
import Home from './Home';
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App/>
  
  </React.StrictMode>
);

