import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="ver-productos-link"> Ver Productos </Link>
      </>
    );
  }
  return (
    <div className="cart-container">
      {carrito.map(prod => (
        <CartItem key={prod.item.id} {...prod} />
      ))}
      <h3 className="total"> Total:${total} </h3>
      <button className="clear-btn" onClick={() => vaciarCarrito()}>
        Vaciar Carrito
      </button>
      <Link className="checkout-link" to="/checkout">
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;
