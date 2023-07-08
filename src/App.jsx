import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { CartProvider } from './CartContext/CartContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from "./notification/NotificationService"



const App = () => {
  return (
    <div className='backgroud'>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  )
}

export default App