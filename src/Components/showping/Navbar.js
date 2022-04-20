import React from 'react';
import logo from '../../img/logo.png';
import '../../App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Cards">
                Menu
              </Nav.Link>

              <Nav.Link as={Link} to="/ssss">
                sssss
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/Login">
                로그인
              </Nav.Link>

              <Nav.Link as={Link} to="/Join">
                회원가입
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
