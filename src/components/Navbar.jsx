import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
    const {logout,currentUser,signup}=useContext(AuthContext)
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
                {currentUser ? (
                <div className="nav-auth-links">
                    
                        <span >
                            Welcome,{currentUser.email}
                        </span>
                  
                  
                    
                    
                <Link className="btn btn-secondary" to="/auth" onClick={logout}>
                        Logout
                    </Link>
                    </div>)
                    : (<div className="navbar-auth">
                   <Link className="btn btn-primary" to="/auth">
                        Login
                    </Link>
                    <Link className="btn btn-secondary" to="/auth" >
                        signup
                    </Link>
                    
                    
                    
                </div>)}
            </div>
        </div>
    </nav>
  )
}

export default Navbar