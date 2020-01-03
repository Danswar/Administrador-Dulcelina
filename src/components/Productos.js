import React, { Component, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Productos extends Component {
  handleModal = obj => {
    console.log(obj.msg);
  };

  render() {
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
          <ButtonModal
            classNameButton="btn btn-primary d-none d-sm-block"
            buttonLabel="Agregar nuevo"
            classNameIcon="fas fa-plus-circle pr-2"
            handleModal={this.handleModal}
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
        <ButtonModal
          classNameButton="btn-float-circle d-block d-sm-none"
          buttonLabel=""
          classNameIcon="fas fa-plus"
          handleModal={this.handleModal}
        />

        <table className="table mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Cant. productos</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td>22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

/* MODAL PARA INGRESAR NUEVO PRODUCTO */
const ButtonModal = props => {
  const { buttonLabel, classNameButton, classNameIcon, handleModal } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSubmit = e => {
    e.preventDefault();
    //the code to save a new product goes here
    const objetoLiteral = { msg: "MENSAJE desde el modal" };
    handleModal(objetoLiteral);
    toggle();
  };

  return (
    <div>
      <button className={classNameButton} onClick={toggle}>
        <i className={classNameIcon}></i>
        {buttonLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
