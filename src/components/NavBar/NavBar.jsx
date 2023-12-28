import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const Navbar = () => {
  return (
    <header>
        <h1>Tienda de Ropa</h1>

        <nav>
            <ul>
                <li>Zapatillas</li>
                <li>Remeras</li>
                <li>Conjuntos</li>
                <li>Gorras</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default Navbar