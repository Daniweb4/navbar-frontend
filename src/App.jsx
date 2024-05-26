
import './App.css'

import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  

  return (
   <div>
    

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>

   
   </div>
  )
}

export default App
