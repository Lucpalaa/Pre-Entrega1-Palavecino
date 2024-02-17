import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="container mt-5" >
    <div className="row">
      <div className="col-lg-6">
        <img className="img-fluid" src={img} alt={nombre} />
      </div>
      <div className="col-lg-6">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        
        {agregarCantidad > 0 ? (
          <Link to="/cart"className="btn btn-success me-2" style={{ margin: "10px" }}
          >Terminar Compra</Link>
          
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          
        )}
        
      </div>
    </div>
  </div>
);
};

export default ItemDetail;
