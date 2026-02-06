import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">
                shopEZ
            </Link>
            <div className="navbar-links">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/checkout">
                    Cart
                </Link>
            </div>
            <div className="navbar-auth">
                <div className="nav-auth-links">
                    <Link className="btn btn-primary" to="/auth">
                        Login
                    </Link>
                    <Link className="btn btn-secondary" to="/auth">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar