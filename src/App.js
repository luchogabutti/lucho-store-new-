import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './screens/products'
import NavBar from './components/NavBar'
import NewProduct from './screens/new-product/Layout';
import './App.css'

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/new-product' element={<NewProduct />}></Route>
          <Route path='/products/:id/edit' element={<NewProduct />}></Route>
        </Routes>
      </>
  );
}

export default App;
