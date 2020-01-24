import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { Autocomplete, Input } from '@material-ui/lab';
import uuid from "uuid";
import PropTypes from "prop-types";

const BarraEntrada = props => {

  const {
    addItem,
    listaProductos,
  } = props;

  const [itemSelected, setItemSelected] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [final, setFinal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: VALIDACIONES
    addItem({
      producto: itemSelected,
      cantidad,
      final,
    });

  }

  const onItemChange = (e, value) => {
    setItemSelected(value);
    setFinal(Number(value.p_venta) * Number(cantidad))

  }

  const onCantidadChange = (e) => {
    const { value } = e.target;
    setCantidad(value);
    if (itemSelected.p_venta) {
      setFinal(Number(itemSelected.p_venta) * Number(value))
    }
  }



  return (
    <form>
      <div className="form-row d-flex flex-nowrap pb-3">
        <div className="col-md-7">
          <Autocomplete
            id="combo-nombre"
            options={listaProductos}
            getOptionLabel={option => option.nombre}
            onChange={onItemChange}
            autoSelect
            renderInput={params => (
              <TextField {...params} label="Nombre producto" variant="outlined" autoFocus fullWidth />
            )}
          />
        </div>


        <div className="col-md-1">
          <TextField id="outlined-basic" onChange={onCantidadChange} label="Cant." defaultValue="1" variant="outlined" fullWidth />
        </div>
        <div className="col-md-3">
          <TextField id="outlined-basic" value={final} label="Final Bsf" variant="outlined" fullWidth />
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
  listaProductos: PropTypes.array,
  /* filterProducts: PropTypes.func,
  suggestions: PropTypes.array, */
}

export default BarraEntrada;