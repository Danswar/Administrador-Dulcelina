import React, { Component, useState } from "react";
import { Button , Modal , ModalHeader , ModalBody , ModalFooter} from 'reactstrap';

export default class Productos extends Component {

  visible=false;

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

        <div className="d-flex flex-wrap justify-content-between mt-2 mt-sm-4 ">
          <button className="btn btn-primary d-none d-sm-block" data-toggle="modal" data-target="#exampleModal">
            <i class="fas fa-plus-circle pr-2"></i>Agregar nuevo
          </button>
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

        <button type="button" class="btn-float-circle d-block d-sm-noney" data-toggle="modal" data-target="#exampleModal">
          <i class="fas fa-plus"/>
        </button>

        <ModalNewProduct />

        <table class="table mt-4">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Cant. productos</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
            <tr>
              <td scope="row">22/12/2019 - 20:30</td>
              <td>12</td>
              <td>502.394,00 Bsf</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class ModalNewProduct extends Component {

  render(){
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}



