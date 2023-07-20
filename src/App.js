import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products/Products'
import NavBar from './components/NavBar/Navbar'
import './App.css'

function App() {
  return (
      <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </>
  );
}

export default App;
