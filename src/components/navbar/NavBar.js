import { Link } from "react-router-dom";
import CartWidget from '../cartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navBar.css"



const NavBar = () => {
    return(
      <div>
        <ul className="nav">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Productos'}>Productos</Link></li>
          <NavDropdown title="Detalle" id="collasible-nav-dropdown">
              <NavDropdown.Item>
               <Link to={'/Detail/:id'}>Valor</Link>
              </NavDropdown.Item>
            </NavDropdown>
          <li><CartWidget/></li>
        </ul>
      </div>
    )
}

export default NavBar