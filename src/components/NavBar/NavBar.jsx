import CartWidget from "../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="logo" src="../img/logo.png" alt="Logovg" />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Categoria/1">
                  Zapatillas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Categoria/2">
                  Remeras
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Categoria/3">
                  Buzos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Categoria/4">
                  Conjuntos
                </NavLink>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;