import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts , filterProducts } from "../../redux/actions/productosActions";
import { addItem, deleteItem } from "../../redux/actions/pedidoActions";

import TablaPedido from "./TablaPedido";
import BarraEntrada from "./BarraEntrada";


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
              addItem={this.props.addItem} 
              filterProducts={this.props.filterProducts}
              suggestions={this.props.suggestions}  
            />

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
  suggestions: state.productos.suggestions,
});

// action from Redux
const mapActionToProps = {
  fetchProducts,
  addItem,
  deleteItem,
  filterProducts,
};

export default connect(mapStateToProps, mapActionToProps)(Pedido);