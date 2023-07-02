import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { CartProvider } from './CartContext/CartContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from "./notification/NotificationService"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App