import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';
import ContactMe from './pages/Contact-me/ContactMe';

function App() {


  return (

    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-me' element={<ContactMe />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

    </>


  )
}

export default App
