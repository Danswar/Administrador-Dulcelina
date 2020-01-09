import React, { Component } from "react";
import UpdateDolarForm from './UpdateDolarForm';
import ModalProducto from "./ModalProducto";

export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dolar_actual: 175,
      productos: [
        {
          id: "7dfbd-a82-cf13-4b4c-ef75370362ac",
          codigo: "11111111",
          nombre: "CACAO EN POLVO 1KG",
          stock: "200",
          stock_min: "1",
          p_costo_bsf: "100",
          p_costo_usd: "10",
          p_venta_bsf: 2100,
          margen_min: 40,
          dolar_base: 10,
          dolar_actual: "150"
        },
        {
          id: "6b0d7c5-c5be-56-358b-3ce33771d76",
          codigo: "111111112",
          nombre: "NEVA-AZUCAR BOLSA 100GRM",
          stock: "14",
          stock_min: 0,
          p_costo_bsf: "800",
          p_costo_usd: "6.66",
          p_venta_bsf: 1800,
          margen_min: 50.150150150150154,
          dolar_base: 120.12012012012012,
          dolar_actual: "180"
        },
        {
          id: "63fed2-6f2a-0625-81b5-580c8725fa8",
          codigo: "33333333",
          nombre: "FRUTOS CONFITADOS",
          stock: "100",
          stock_min: 0,
          p_costo_bsf: "450",
          p_costo_usd: "15",
          p_venta_bsf: 3500,
          margen_min: 33.33333333333333,
          dolar_base: 30,
          dolar_actual: "175"
        }
      ]
    };
  }

  /* Agregamos al state el nuevo producto que viene desde el modal */
  newProducto = obj => {
    this.setState({
      dolar_actual: obj.dolar_actual,
      productos: [...this.state.productos, obj]
    });
  };

  /*Editar producto en el state*/
  editProducto= obj =>{
    let nuevaLista = this.state.productos.map(prod =>{
      if(prod.id===obj.id){
        prod=obj;
      }
      return prod;
    });

    this.setState({
      dolar_actual: obj.dolar_actual, /**TODO quitar esto */
      productos: nuevaLista
    });
  }


  render() {
    const { dolar_actual, productos } = this.state;

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

        <div className="pt-4">
          <p className="text-right font-italic">
            <small>Dolar: </small>
            <strong> {dolar_actual}bsf/usd</strong> - act.: justo ahora
            <UpdateDolarForm />
            {/* <button className="btn fuente-verde">
              <i className="fas fa-sync"></i>
            </button> */}
          </p>
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
                (prod.p_venta_bsf / (prod.p_costo_usd * dolar_actual) - 1) *
                100;
              return (
                <tr key={prod.id}>
                  <th scope="row" className="d-none d-sm-table-cell">
                    {prod.codigo}
                  </th>
                  <td>{prod.nombre}</td>
                  <td className="d-none d-sm-table-cell">{prod.stock}</td>
                  <td>{parseFloat(margen).toFixed(1)}%</td>
                  <td>{prod.p_venta_bsf}Bsf</td>
                  <td>
                    <ModalProducto
                      modalTitle = "Editar producto"
                      classNameButton="btn p-0"
                      buttonLabel=""
                      classNameIcon="far fa-edit"
                      producto={prod}
                      handleModal = {this.editProducto}
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


