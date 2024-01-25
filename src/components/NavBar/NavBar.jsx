import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1 className='h1'>Tienda de Ropa</h1>
      </Link>
        <nav>
            <ul>
                <li><NavLink to="/categoria/2">Zapatillas</NavLink></li>
              
                <li><NavLink to="/categoria/3">Conjuntos</NavLink></li>
              
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default Navbar