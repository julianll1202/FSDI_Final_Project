import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Favorites from './pages/favorites';
import Restaurant from './pages/restaurant';
import GlobalContext from './state/globalContext';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SideMenu from './components/side-menu';
import Logout from './pages/logout';
import FoodDetails from './pages/food-details';
import Checkout from './pages/checkout';


function App() {
  

  
  return (
    <GlobalContext>
    <div className='menus'>
      <SideMenu />
      <div className='top-menu'>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/food-details" element={<FoodDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
    </GlobalContext>
    
  );
}

export default App;
