import './App.css'
import NavBar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Armaduras from './Components/armaduras'
import Armas from './Components/armas'
import Magia from './Components/magia'
import CartWidget from './Components/CartWidget'
import Error from './Components/Error'
import ItemDetailContainer from './Components/ItemDetailContainer'


function App() {
  return(
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos!'/>} />
      <Route path='/category/:id' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/armas' element={<Armas greeting='¡Armas!'/>} />
      <Route path='/armaduras' element={<Armaduras greeting='¡Armaduras!'/>} />
      <Route path='/magia' element={<Magia greeting='¡Items mágicos!'/>} />
      <Route path='/cart' element={<CartWidget/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
