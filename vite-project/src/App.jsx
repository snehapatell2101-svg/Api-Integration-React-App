import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
