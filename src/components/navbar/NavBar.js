import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand><Link to={'/'}>BGP AUTOMOTORES</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
          <Nav.Link><Link to={'/products'}>Autos</Link></Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><Link to={'/products/0KM'}>Okm</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to={'/products/Usado'}>Usados</Link> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item> <Link to={'/products/Alta gama'}>Alta gama</Link>  </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><Link to={'/cart'}><CartWidget/></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;