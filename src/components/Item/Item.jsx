import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, stock,  nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <p>Precio: {precio} </p>
        <Link className='miBtn' to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item