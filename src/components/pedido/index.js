import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts, filterProducts } from "../../redux/actions/productosActions";
import { addRow, deleteRow } from "../../redux/actions/pedidoActions";

import TablaPedido from "./TablaPedido";
import BarraEntrada from "./BarraEntrada";

import PropTypes from "prop-types";

class Pedido extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <div id="ventana-factura" className="card mt-3">
          <h5 className="card-header card-header-importe">
            Gestion de pedidos <small>Sucursal "La churuata"</small>
          </h5>

          <div className="card-body">

            <BarraEntrada
              addRow={this.props.addRow}
              listaProductos={this.props.listaProductos}
            /* filterProducts={this.props.filterProducts}
            suggestions={this.props.suggestions}   */
            />

            <div className="container tabla-factura scroll-on mt-3">

              <TablaPedido
                listaPedido={this.props.listaPedido}
                deleteRow={this.props.deleteRow}
              />

            </div>

          </div>

          <div className="card-footer importe">
            <div className="d-flex flex-row-reverse height-full ">
              <button className="btn btn-outline-success ml-5"><h5>Procesar</h5></button>
              <p className="align-self-end fuente-ok">Bsf</p>
              <h1 className="align-self-end font-weight-bolder fuente-ok">
                {this.props.listaPedido.reduce((sum, value) =>
                  (typeof value.final == "number" ? sum + value.final : sum + Number(value.final)), 0)
                }
              </h1>
              <h4 className="mr-3 fuente-ok">Importe</h4>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// PROPTYPES
Pedido.propTypes = {
  listaPedido: PropTypes.array,
  listaProductos: PropTypes.array,
  fetchProducts: PropTypes.func,
  addRow: PropTypes.func,
  deleteRow: PropTypes.func,
  filterProducts: PropTypes.func,
}

// props from Redux
const mapStateToProps = (state) => ({
  listaPedido: state.pedido.listaPedido,
  listaProductos: state.productos.listaProductos,
  /* suggestions: state.productos.suggestions, */
});

// action from Redux
const mapActionToProps = {
  fetchProducts,
  addRow,
  deleteRow,
  filterProducts,
};

export default connect(mapStateToProps, mapActionToProps)(Pedido);