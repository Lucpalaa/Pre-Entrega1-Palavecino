import React from 'react';
import NavBar from './components/NavBar/Navbar';
import MainTitle from './components/Title/MainTitle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenidos" />
    </>
  )
}

export default App