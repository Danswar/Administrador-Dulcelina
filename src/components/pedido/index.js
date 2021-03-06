import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchProducts,
  filterProducts,
} from "../../redux/actions/productosActions";

import { processVenta } from "../../redux/actions/ventasActions";
import { addRow, deleteRow } from "../../redux/actions/pedidoActions";

import TablaPedido from "./TablaPedido";
import BarraEntrada from "./BarraEntrada";

import PropTypes from "prop-types";

import "./styles.css";
import ModalConfirmacion from "./ModalConfirmacion";

class Pedido extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleProcesar = () => {
    if (this.props.listaPedido.length !== 0) {
      this.props.processVenta();
    }
  };

  render() {
    return (
      <div className="pedido-main container">
        <div id="ventana-factura" className="card mt-sm-3 mt-0">
          <div className="card-body">
            <BarraEntrada
              addRow={this.props.addRow}
              listaProductos={this.props.listaProductos}
            />

            <div className="container tabla-factura scroll-on mt-sm-3 mt-0">
              <TablaPedido
                listaPedido={this.props.listaPedido}
                deleteRow={this.props.deleteRow}
              />
            </div>
          </div>

          <div className="card-footer importe">
            <div className="d-flex flex-row-reverse height-full ">
              <ModalConfirmacion
                total={this.props.total}
                totalUsd={this.props.totalUsd}
                handleAccept={this.handleProcesar}
              />
              <p className="align-self-end fuente-ok">Bsf</p>
              <h1 className="align-self-end font-weight-bolder fuente-ok">
                {this.props.total
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h1>
              <p className="align-self-end fuente-azul   mr-4">Usd</p>
              <h1 className="align-self-end font-weight-bolder fuente-azul">
                {this.props.totalUsd
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h1>
              <h4 className="mr-3 fuente-ok d-none d-sm-block">Importe</h4>
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
  total: PropTypes.number,
  listaProductos: PropTypes.array,
  fetchProducts: PropTypes.func,
  addRow: PropTypes.func,
  deleteRow: PropTypes.func,
  filterProducts: PropTypes.func,
};

// props from Redux
const mapStateToProps = state => ({
  listaPedido: state.pedido.listaPedido,
  total: state.pedido.total,
  totalUsd: state.pedido.totalUsd,
  listaProductos: state.productos.listaProductos,
});

// action from Redux
const mapActionToProps = {
  fetchProducts,
  addRow,
  deleteRow,
  filterProducts,
  processVenta,
};

export default connect(mapStateToProps, mapActionToProps)(Pedido);
