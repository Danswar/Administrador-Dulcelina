import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import uuid from "uuid";
import PropTypes from "prop-types";

const BarraEntrada = props => {
  const { addRow, listaProductos } = props;

  const [itemSelected, setItemSelected] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [final, setFinal] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (!itemSelected || cantidad === "" || final === "") {
      return; //si no estas completo y correcto no pasaras
    }

    addRow({
      id: uuid(), //solo para controlar el borrado de la lista
      producto: itemSelected,
      cantidad,
      final
    });

    setItemSelected(null);
    setCantidad(1);
    setFinal("");
  };

  //Cambio en el item seleccionado en el campo autocompletado
  const onItemChange = (e, value) => {
    setItemSelected(value);
    if (!value) {
      setFinal("");
    } else if (cantidad) {
      setFinal(Number(value.p_venta) * Number(cantidad));
    }
  };

  //Cambio en el campo de cantidad
  const onCantidadChange = e => {
    const { value } = e.target;
    if (itemSelected) {
      setFinal(Number(itemSelected.p_venta) * Number(value));
      setCantidad(value);
    } else {
      setFinal("");
    }
  };

  return (
    <form className="barra-entrada">
      <div className="form-row d-flex flex-nowrap pb-3">
        <div className="col-md-7">
          <Autocomplete
            id="combo-nombre"
            options={listaProductos}
            getOptionLabel={option => (option.nombre ? option.nombre : "")}
            value={itemSelected}
            onChange={onItemChange}
            autoSelect
            autoFocus
            renderInput={params => (
              <TextField
                {...params}
                label="Nombre producto"
                variant="outlined"
                autoFocus
                fullWidth
              />
            )}
          />
        </div>

        <div className="col-md-1">
          <TextField
            id="outlined-basic"
            value={cantidad}
            onChange={onCantidadChange}
            label="Cant."
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="col-md-3">
          <TextField
            id="outlined-basic"
            value={final}
            type="number"
            label="Final Bsf"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="col-md-1 align-self-center">
          <button className="btn btn-info img-circle ml-1" onClick={onSubmit}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

BarraEntrada.propTypes = {
  addRow: PropTypes.func,
  listaProductos: PropTypes.array
  /* filterProducts: PropTypes.func,
  suggestions: PropTypes.array, */
};

export default BarraEntrada;
