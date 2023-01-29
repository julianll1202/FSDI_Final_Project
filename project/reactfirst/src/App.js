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
import GlobalContext from './state/globalContext';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  

  
  return (
    <GlobalContext>
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    </div>
    </GlobalContext>
    
  );
}

export default App;
