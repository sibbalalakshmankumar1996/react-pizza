import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
export default function Home() {
  return (
    <>
  <Navbar/>
<div class="mt-4 p-5 bg-light text-black rounded">
    <h1>Pizza Delivery</h1> 
    <p>Welcome to pizza delivery service. This is the place when you may choose the most delicious pizza you like from wide variety of options!</p>
    <hr/>
    <p>We're performing delivery free of charge in case if your order is higher than 20$</p> 
    <Link to="login">
        <button className="btn btn-dark form-control text-white rounded">Sign in and Order</button>
    </Link>
  </div>
    </>
  )
}
