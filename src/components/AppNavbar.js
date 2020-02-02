import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="sticky-top">
        <Navbar color="dark" fixed="top" dark expand="lg">
          <NavbarBrand href="/">
            <img
              src={logo}
              style={{ height: "35px" }}
              className="mr-2"
              alt="logo dulcelina"
            />
            <span style={tituloApp} >Dulcelina App</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavLink 
                exact={true}
                to="/" 
                style={styleLink}
                activeStyle={activeLink}
                onClick={this.toggle}
              >
                <i className="fas fa-home pr-3"></i>Home
              </NavLink>

              <NavLink 
                to="/pedido" 
                style={styleLink}
                activeStyle={activeLink}
                onClick={this.toggle}
              >
                <i className="fab fa-sellsy pr-3"></i>Armar pedido
              </NavLink>

              <NavLink 
                to="/productos" 
                style={styleLink}
                activeStyle={activeLink}
                onClick={this.toggle}
              >
                <i className="fas fa-boxes pr-3"></i>Productos
              </NavLink>

            </Nav>

            <Button className="btn btn-outline-success mt-3">Logout</Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const styleLink = {
  padding: "10px 0 10px 10px",
  textDecoration: "none",
  color: "rgb(209, 215, 222)"
};

const activeLink ={
  borderLeft: '#007bff solid 2px',
  color: 'rgb(253, 254, 255)',
  backgroundColor: '#262627'
}

const tituloApp={
  color:' white',
  fontSize:' 1.5rem',
  fontWeight:' bolder',
  marginBottom:' 0',
  textAlign:' center',
  marginLeft:' .5rem',
  fontFamily: 'Dancing Script, cursive'
}

export default AppNavbar;
