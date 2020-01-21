import React, { Component } from 'react';

export default class BarraEntrada extends Component {

    render(){
        return (
            <form>
              <div className="form-row d-flex flex-nowrap pb-3">
                <div className="col-md-7">
                  <label for="inputEmail4">Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa el nombre o codigo de producto"
                  />
                </div>
                <div className="col-md-1">
                  <label for="inputEmail4">Cant.</label>
                  <input type="text" className="form-control" placeholder="#" />
                </div>
                <div className="col-md-3">
                  <label for="inputEmail4" className="d-block text-right mr-3">
                    Final (Bsf)
                  </label>
                  <input
                    type="text"
                    className="form-control text-right"
                    placeholder="7.800.000,00"
                  />
                </div>
                <div className="col-md-1 align-self-end">
                  <button className="btn btn-info img-circle ml-1">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
        );
    }

}