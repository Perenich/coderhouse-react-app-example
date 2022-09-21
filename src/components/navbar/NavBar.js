import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


const NavBar = () => {
    return(
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar><CartWidget/></Navbar>
        <Navbar.Brand href="#home">React E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inico</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Articulo uno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Articulo dos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Articulo tres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todos los articulos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar