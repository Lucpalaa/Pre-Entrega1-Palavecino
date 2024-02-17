import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("¡Por favor completa todos los campos!");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden, rata de dos patas!");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all (
        orden.items.map( async (libroOrden)=>{
        const libroRef = doc(db, "items", libroOrden.id)    
        const libroDoc= await getDoc(libroRef)
        const stockActual = libroDoc.data().stock;
        await updateDoc (libroRef, {stock: stockActual - libroOrden.cantidad})
    })
    )
    .then(()=> {
        addDoc (collection(db, "orders"), orden)
        .then (docRef=> {
            setOrdenId (docRef.id)
            vaciarCarrito();               
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion("");  
            
              Swal.fire({
                title: "Orden generada exitosamente!!",
                icon: "success",
                text: `Gracias por la compra!! Tu numero de orden es: ${docRef.id}`,
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
              }).then((result) => {
                if (result.isConfirmed) {                      
                  window.location.href = '/';                     }
              });
            
        })                   
        .catch (error => console.log ("Error al confeccionar la Orden",error) )
        })
    
        .catch (error => {
            console.log ("No se pudo actualizar el stock", error)
        setError ("Error no se pudo actualizar el stock")
        
    })
    
}       

  return (
    <div>
      <h2>Checkout - Finalizamos la Compra </h2>

      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.nombre} x {producto.cantidad}{" "}
            </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="nombre"> Nombre </label>
          <input
            type="text"
            value={nombre}
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido"> Apellido </label>
          <input
            type="text"
            value={apellido}
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono"> Telefono </label>
          <input
            type="text"
            value={telefono}
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailcon"> Email Confirmación </label>
          <input
            type="email"
            value={emailConfirmacion}
            id="emailcon"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}

        <div className="botones">
          <button className="miBtn checkout" disabled={carrito.length === 0}>
            {" "}
            Finalizar Orden{" "}
          </button>
          <button className="miBtn checkout" type="reset">
            {" "}
            Borrar{" "}
          </button>
        </div>
        {ordenId && (
          <strong>
            ¡Gracias por su compra! Tu número de orden es el siguiente:{" "}
            {ordenId}{" "}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
