import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/addtoken">
            <Nav.Link href="/addtoken">Add Token</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
