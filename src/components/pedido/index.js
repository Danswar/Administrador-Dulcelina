import React, { Component } from "react";
import BarraEntrada from "./BarraEntrada";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/actions/productosActions";
import { addItem, deleteItem } from "../../redux/actions/pedidoActions";

import TablaPedido from "./TablaPedido";

import uuid from "uuid";

class Pedido extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  click = () => {
    let id = uuid();
    this.props.addItem({
      id: id,
      nombre: id,
      p_venta: 3000,
      cantidad: 5,
      final: "15000",
    })
  }

  render() {
    return (
      <div className="container">
        <div id="ventana-factura" className="card mt-3">
          <h5 className="card-header card-header-importe">
            Gestion de pedidos <small>Sucursal "La churuata"</small>
          </h5>

          <div className="card-body">
            <button onClick={this.click}>Add Item</button>
            <BarraEntrada />

            <div className="container tabla-factura scroll-on mt-3">

              <TablaPedido
                listaPedido={this.props.listaPedido}
                deleteRow={this.props.deleteItem}
              />

            </div>

          </div>

          <div className="card-footer importe">
            <div className="d-flex flex-row-reverse height-full">
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
}

// props from Redux
const mapStateToProps = (state) => ({
  listaPedido: state.pedido.listaPedido,
});

// action from Redux
const mapActionToProps = {
  fetchProducts,
  addItem,
  deleteItem,
};

export default connect(mapStateToProps, mapActionToProps)(Pedido);