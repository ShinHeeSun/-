import React from "react"
import logo from '../../img/logo.png'
import {
    Button,
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
  } from 'react-bootstrap'

  function NavBar () {
    return (
      <>

<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <a href="...">
              {' '}
              <img className="logoName" src={logo} let="logo" alt="..." />
            </a>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      </>
);
}
export default NavBar;