
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'

function App() {
 

  return (
    <div className="app">
      <AuthProvider>
<Navbar/>    
  <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
