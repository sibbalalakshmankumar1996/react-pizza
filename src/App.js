import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createContext } from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import MainSection from './components/MainSection';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';

export const cartContext = createContext();

function App() {
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('mycart') != undefined){
      let arr = JSON.parse(localStorage.getItem('mycart'))
      setCartData(arr)
      
    }


  },[])


  const changeCartItems = data =>{
    setCartData(data);
    console.log(data);
  }
  return (
    <>
    <cartContext.Provider value={{cartData, changeCartItems}}>
    <Router>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/mainsection" element={< MainSection/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={< Checkout/>} />
          <Route path="/success" element={< Success/>} />
        </Routes>

      </section>
    </Router>
    </cartContext.Provider>
    </>
  )
}

export default App