import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './screens/products/Container'
import NavBar from './components/NavBar/Navbar'
import NewProduct from './screens/new-product/NewProduct';
import './App.css'

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/new-product' element={<NewProduct />}></Route>
        </Routes>
      </>
  );
}

export default App;
