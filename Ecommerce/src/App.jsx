import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {
  

  return (
    <div>
      <div className="bg-slate-900 ">
        <Navbar/> 
      </div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>


    </div>
  )
}

export default App
