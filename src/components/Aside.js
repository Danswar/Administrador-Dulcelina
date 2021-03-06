import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_dulcelina.jpeg";

class Aside extends Component {
  render() {
    return (
      <aside className="col-0 col-lg-3 pr-0 pl-0 d-none d-lg-block">
        <div className="header-aside container-fluid">
          <img src={logo} alt="logo dulcelina" />
          <p className="titulo-app">Dulcelina App</p>
        </div>

        <nav className="container-flush mt-3">
          <ul>
            <li>
              <NavLink className="d-block item-nav" exact to="/">
                <i className="fas fa-home pr-3"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink className="d-block item-nav" to="/pedido">
                <i className="fab fa-sellsy pr-3"></i>Armar pedido
              </NavLink>
            </li>
            <li>
              <NavLink className="d-block item-nav" to="/productos">
                <i className="fas fa-boxes pr-3"></i>Productos
              </NavLink>
            </li>
            <li>
              <NavLink className="d-block item-nav" to="/ventas">
                <i className="fas fa-cash-register pr-3"></i>Ventas
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="container mt-3 mb-3">
          <hr />
        </div>

        <div className="container d-none">
          <p className="text-muted mb-2">Busca un producto</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="ejm: Torta"
              aria-label="ejm: Torta"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
