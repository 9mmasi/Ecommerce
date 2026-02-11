
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
import ProtectedRoute from './context/ProtectedRoute'
function App() {
 

  return (
    <div className="app">
      <AuthProvider>
        <CartProvider>
<Navbar/>  

  <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/checkout' element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path='/product/:id' element={<ProtectedRoute><ProductDetail/></ProtectedRoute>} />
      </Routes>
      </CartProvider>  
      </AuthProvider>
    </div>
  )
}

export default App
