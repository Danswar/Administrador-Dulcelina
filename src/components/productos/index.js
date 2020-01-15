import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productosActions";

import UpdateDolarForm from "./UpdateDolarForm";
import ModalProducto from "./ModalProducto";

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: "",
      productos: props.productos
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  /* TODO: Poner esto en redux */
  /* Agregamos al state el nuevo producto que viene desde el modal */
  newProducto = obj => {
    this.setState({
      productos: [...this.state.productos, obj]
    });
  };

  /* TODO: Poner esto en redux */
  /*Editar producto en el state*/
  editProducto = obj => {
    let nuevaLista = this.state.productos.map(prod => {
      if (prod.id === obj.id) {
        prod = obj;
      }
      return prod;
    });

    this.setState({
      productos: nuevaLista
    });
  };

  changeDolarValue = newDolarValue => {
    this.setState({
      dolar_actual: newDolarValue
    });
  };
  handleSearch = e => {
    let searchParam = e.target.value;
    this.setState({
      searchParam
    });

    if (searchParam !== "") {
      let matches = this.props.productos.filter(producto => {
        const regex = new RegExp(`^${searchParam}`, "gi");

        return producto.nombre.match(regex); // || producto.codigo.match(regex);
      });
      console.log(matches);
      this.setState({
        productos: matches
      });
    } else {
      this.setState({
        productos: this.props.productos
      });
    }
  };

  render() {
    const { dolar_actual } = this.props;
    const { productos } = this.props;

    return (
      <div className="container ">
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
            handleModal={this.newProducto}
          />
          <div className="input-group col-md-6 col-12 pr-0 pl-0">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar algo"
              aria-label="Buscar algo"
              aria-describedby="button-addon2"
              value={this.state.searchParam}
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
          handleModal={this.newProducto}
        />

        <div className="pt-4  pb-1 text-right">
          <p className="text-right font-italic d-inline pr-2">
            <small>Dolar: </small>
            <strong> {dolar_actual}bsf/usd</strong> - act.: justo ahora
            {/* <button className="btn fuente-verde">
              <i className="fas fa-sync"></i>
            </button> */}
          </p>
          <UpdateDolarForm
            handleUpdateDolar={this.changeDolarValue}
            dolar_actual={this.state.dolar_actual}
          />
        </div>

        {/* TABLA DE DATOS */}
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="d-none d-sm-table-cell">
                Cod.
              </th>
              <th scope="col">Nombre</th>
              <th scope="col" className="d-none d-sm-table-cell">
                Stock
              </th>
              <th scope="col">Margen</th>
              <th scope="col">P.Venta</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productos.map(prod => {
              let margen =
                (prod.p_venta / (prod.p_costo_usd * dolar_actual) - 1) * 100;
              return (
                <tr key={prod.id}>
                  <th scope="row" className="d-none d-sm-table-cell">
                    {prod.codigo}
                  </th>
                  <td>{prod.nombre}</td>
                  <td className="d-none d-sm-table-cell">{prod.stock}</td>
                  <td>{parseFloat(margen).toFixed(1)}%</td>
                  <td>{prod.p_venta}Bsf</td>
                  <td>
                    <ModalProducto
                      modalTitle="Editar producto"
                      classNameButton="btn p-0"
                      buttonLabel=""
                      classNameIcon="far fa-edit"
                      producto={prod}
                      handleModal={this.editProducto}
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
  productos: state.productos
});

export default connect(mapStateToProps, { fetchProducts })(Productos);
