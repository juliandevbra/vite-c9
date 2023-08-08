import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)
  const  add = (item) => {
    setCart([...cart, item])
  }
  return (
    <div className='App'>
      <Navbar/>
      <Cart cart={cart}/>
      <Home add={add}/>
    </div>
  )
}

export default App
