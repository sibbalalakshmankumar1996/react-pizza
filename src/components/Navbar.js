import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid d-flex justify-content-between">
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
          <Link to="/signup" className="nav-link">
              <button className="btn btn-outline-dark">Sign Up</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
          <button className="btn btn-outline-dark">Login</button>
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
