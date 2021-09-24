import React from "react";
import {Image, Navbar, Container, Nav} from 'react-bootstrap';
import Logo from './vaccine-passport.svg';

function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            defaultActiveKey="/home"
            className="justify-content-end"
          >
            <Nav.Item>
              <Nav.Link href="/home">UPLOAD PROOF</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search">SEARCH LOCATIONS</Nav.Link>
            </Nav.Item>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
