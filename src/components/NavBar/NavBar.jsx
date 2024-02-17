import CartWidget from "../CardWidget/CardWidget";
import {Link, NavLink} from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src="./img/logo.png" alt="Logovg" />
      </Link>

        <nav>
            <ul>

                <li>
                  <NavLink className="miBtn" to="/Zapatillas/1">
                    Zapatillas
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/Remeras/2">
                    Remeras
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/Buzos/3">
                    Buzos
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/Conjuntos/4">
                    Conjuntos
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar