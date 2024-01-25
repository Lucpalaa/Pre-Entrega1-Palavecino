import React from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element = {<h2>A gatillar el plastico!</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App