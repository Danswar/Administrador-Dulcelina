import React, { Component } from "react";

import { connect } from "react-redux";
import {
  fetchProducts,
  filterProducts,
  orderProductsBy,
} from "../../redux/actions/productosActions";

import ModalProducto from "./ModalProducto";
import ModalDelete from "./ModalDelete";

import "./styles.css";

class Productos extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleSearch = e => {
    let searchParam = e.target.value;
    this.props.filterProducts(searchParam);
  };

  render() {
    const { dolar_actual, suggestions } = this.props;

    return (
      <div className="container productos-main">
        <div className="row mr-1 ml-1 mr-md-0 ml-md-0">
          <h5 className="mt-2 ">
            Listado de productos{" "}
            <small className="text-muted font-italic d-none d-md-inline">
              | Sucursal "La Churuata"
            </small>
          </h5>
        </div>

        {/* BARRA DE BUSQUEDA Y BOTON*/}
        <div className="d-flex flex-wrap justify-content-between mt-2 mt-sm-4 ">
          <ModalProducto
            modalTitle="Agregar producto"
            classNameButton="btn btn-primary d-none d-sm-block"
            buttonLabel="Agregar nuevo"
            classNameIcon="fas fa-plus-circle pr-2"
          />
          <div className="input-group col-md-6 col-12 pr-0 pl-0  pb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar algo"
              aria-label="Buscar algo"
              aria-describedby="button-addon2"
              onChange={this.handleSearch}
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

        {/* BOTON FLOTANTE REDONDO SOLO PARA PANTALLAS PEQUEÑAS*/}
        <ModalProducto
          modalTitle="Agregar producto"
          classNameButton="btn-float-circle d-block d-sm-none"
          buttonLabel=""
          classNameIcon="fas fa-plus"
        />

        {/* TABLA DE DATOS */}
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col" className="d-none">
                Cod.
              </th> */}
              <th scope="col">Nombre</th>
              <th scope="col">Stock</th>
              <th scope="col">P.Venta</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map(prod => {
              return (
                <tr key={prod.id}>
                  <td>{prod.nombre}</td>
                  <td className="d-none d-sm-table-cell">{prod.stock}</td>
                  <td>
                    <span className="text-muted font-italic d-inline d-sm-none">
                      P. Venta:{" "}
                    </span>
                    {Number(prod.p_venta_usd)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    USD
                  </td>
                  <td className="d-flex td-acciones">
                    <ModalProducto
                      modalTitle="Editar producto"
                      classNameButton="btn p-0"
                      buttonLabel=""
                      classNameIcon="far fa-edit"
                      producto={prod}
                    />
                    <ModalDelete
                      classNameButton="btn p-0 pl-2"
                      buttonLabel=""
                      classNameIcon="far fa-trash-alt fuente-danger"
                      producto={prod}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dolar_actual: state.dolar.dolar_actual,
  productos: state.productos.listaProductos,
  filter: state.productos.filter,
  suggestions: state.productos.suggestions,
});

const mapActionsToProps = {
  fetchProducts,
  filterProducts,
  orderProductsBy,
};

export default connect(mapStateToProps, mapActionsToProps)(Productos);
