
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from "react-use-cart";
import Cart from './pages/Cart'
function App() {
 

  return (
    <div className="app">
      <AuthProvider>
<Navbar/>  
<CartProvider>
  <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/checkout' element={<Cart/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
      </CartProvider>  
      </AuthProvider>
    </div>
  )
}

export default App
