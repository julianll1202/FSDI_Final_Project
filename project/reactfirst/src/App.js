import logo from './logo.svg';
import './App.css';
import Header from './components/header';

import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/signup';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
