import React from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import LogoImage from '../assets/images/Logo.jpg';
import Addtokart from '../assets/images/atk.png';


function AppHeader() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={LogoImage}
            alt="Logo"
            height="20"
            width={70}
            className="d-inline-block align-top"
            title="Pabili po logo"
          />
          Pabili po
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#blog">Food</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              className="form-control me-2"
            />
           <Nav.Link href="">
              <img
                src={Addtokart}
                alt="Add to cart"
                height="50"
                width="50"
                className="d-inline-block align-top"
                title="Add to cart logo"
              />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
