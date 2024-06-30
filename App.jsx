
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import ShoppingCard from './pages/ShoppingCard'
import { Login } from './Auth/Login'
import { Register } from './Auth/Register'

function App() {


  return (
<div className=''>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/product/:id' element={<ProductDetail/>}></Route>
<Route path='/cart' element={<ShoppingCard/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
</Routes>

</div>

  )
}

export default App
