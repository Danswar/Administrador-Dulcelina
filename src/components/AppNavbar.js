import React, { Component } from 'react';

import logo from '../assets/logo.jpeg';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

class AppNavbar extends Component{

	state = {
		isOpen: false
	}

	toggle = () =>{
		this.setState({
				isOpen: !this.state.isOpen
		});
	}

	render(){
		
		return (
			<div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/"><img src={logo} style={{height: '35px'}} className="mr-2" alt="logo dulcelina"/>DulceApp</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#"><i className="fab fa-sellsy pr-3"></i>Armar pedido</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><i className="fas fa-boxes pr-3"></i>Productos</NavLink>
            </NavItem>  
          </Nav>
          <Button className="btn btn-outline-success">Logout</Button>
        </Collapse>
      </Navbar>
    </div>
		);
	}

}

export default AppNavbar
