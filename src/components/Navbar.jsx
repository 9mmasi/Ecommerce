import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useCart } from 'react-use-cart'

const Navbar = () => {
    const {logout,currentUser}=useContext(AuthContext)
    const {isEmpty,totalUniqueItems}=useCart()
    
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">
                shopEZ
            </Link>
            <div className="navbar-links">
                <Link className="navbar-link" to="/">
                    Home
                </Link>
                <Link className="navbar-link" to="/checkout">
                    Cart{isEmpty ?null : ` (${totalUniqueItems})`}
                </Link>
            </div>
            <div className="navbar-auth">
                {currentUser ? (
                <div className="navbar-auth-links">
                    
                        <span >
                            Welcome,{currentUser.email}
                        </span>
                  
                  
                    
                    
                <Link className="btn btn-secondary" to="/auth" onClick={logout}>
                        Logout
                    </Link>
                    </div>)
                    : (<div className="navbar-auth-links">
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