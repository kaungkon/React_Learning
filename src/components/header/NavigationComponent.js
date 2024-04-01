import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';

const NavigationComponent = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const navToggle = () => {
    setisNavOpen(!isNavOpen);
  };
  return (
    <div>
        <Navbar color="secondary" dark expand="sm">
          <NavbarToggler onClick={navToggle} /> 
          <NavbarBrand href="/">Restaurant</NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className="nav-link">Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">Contact</Link>
            </NavItem>
            
          </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationComponent;