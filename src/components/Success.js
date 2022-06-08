import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom';
export default function Success() {
  return (
    <>
    <Header />
    <h1>Order has been placed Successfully!</h1>
    <div class="alert alert-info">
    <h4 className="text-success font-weight-bold">You will recieve notification by email with order details.</h4>
  </div>
  <Link to="/mainsection" className='btn bg-dark text-white'>Go an order some more</Link>
    </>
  )
}
