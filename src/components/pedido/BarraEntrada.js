import React, {useState} from "react";

import uuid from "uuid";

import PropTypes from "prop-types";

const BarraEntrada = props => {

  const {
    addItem,
    filterProducts,
    suggestions
  } = props;

  const [ readyToSend , setReadyTosend ] = useState(false);
  const [ showSuggestions , setShowSuggestions ] = useState(false);
  const [ item , setItem ] = useState(false);
  
  const onSubmit = (e) =>{
    e.preventDefault();

    if(!readyToSend){
      return;
    }

    let id = uuid();
    addItem({
      id: id,
      nombre: id,
      p_venta: 3000,
      cantidad: 5,
      final: "15000",
    })
  }

  const onChange = (e) => {
    const {value} = e.target;
    filterProducts(value);
    
    if(value.length===0){
      setShowSuggestions(false);
      setItem(null);
      setReadyTosend(false);
      return;
    }
    
    
  } 



  return (
    <form>
      <div className="form-row d-flex flex-nowrap pb-3">
        <div className="col-md-7">
          <label htmlFor="inputEmail4">Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa el nombre o codigo de producto"
            onChange={onChange}
          />
        </div>
        <div className="col-md-1">
          <label htmlFor="inputEmail4">Cant.</label>
          <input type="text" className="form-control" placeholder="#" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputEmail4" className="d-block text-right mr-3">
            Final (Bsf)
          </label>
          <input
            type="text"
            className="form-control text-right"
            placeholder="7.800.000,00"
          />
        </div>
        <div className="col-md-1 align-self-end">
          <button
            className="btn btn-info img-circle ml-1 disable"
            onClick={onSubmit}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

BarraEntrada.propTypes = {
  addItem: PropTypes.func,
  filterProducts: PropTypes.func,
  suggestions: PropTypes.array,
}

export default BarraEntrada;