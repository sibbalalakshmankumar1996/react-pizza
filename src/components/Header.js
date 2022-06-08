import React,{useContext} from 'react'

import { cartContext } from '../App';
import {Link} from 'react-router-dom';
export default function Header() {
    
    const myContext = useContext(cartContext);
    const {cartData} = myContext;
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">
    <img src="https://images.vexels.com/media/users/3/77628/raw/a34549f53140f638d6b9287f4ab0e238-vintage-pizza-logo-design.jpg"
        height={80} width={80} alt="pizza-logo"  />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/mainsection" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart <span className="badge bg-secondary">{cartData.length}</span></Link>
        </li>
        <li className="nav-item">
          <Link to="profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">
          <button className="btn btn-outline-dark">Logout</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
