import React, { Component } from "react";
import uuid from "react-uuid";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

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
  handleModal = obj => {
    this.setState({
      dolar_actual: obj.dolar_actual,
      productos: [...this.state.productos, obj]
    });
  };

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
          <ModalNew
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
        <ModalNew
          classNameButton="btn-float-circle d-block d-sm-none"
          buttonLabel=""
          classNameIcon="fas fa-plus"
          handleModal={this.handleModal}
        />

        <div className="pt-4">
          <p className="text-right font-italic">
            <small>Calculos con dolar a:</small>
            <strong> {dolar_actual}bsf/usd</strong> - actualizado: justo ahora
            <button className="btn fuente-verde">
              <i className="fas fa-sync"></i>
            </button>
          </p>
        </div>

        {/* TABLA DE DATOS */}
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Cod.</th>
              <th scope="col">Nombre</th>
              <th scope="col">Stock</th>
              <th scope="col">Margen</th>
              <th scope="col">P.Venta</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productos.map(prod => {
              let margen =(prod.p_venta_bsf / (prod.p_costo_usd * dolar_actual) -1)*100;
              return (
                <tr key={prod.id}>
                  <th scope="row">{prod.codigo}</th>
                  <td>{prod.nombre}</td>
                  <td>{prod.stock}</td>
                  <td>
                    {parseFloat(margen).toFixed(1)}%
                  </td>
                  <td>{prod.p_venta_bsf}Bsf</td>
                  <td>
                    <i className="fas fa-ellipsis-v"></i>
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

/* MODAL PARA INGRESAR NUEVO PRODUCTO */
class ModalNew extends Component {
  constructor(props) {
    super(props);

    this.buttonLabel = props.buttonLabel;
    this.classNameButton = props.classNameButton;
    this.classNameIcon = props.classNameIcon;

    this.state = {
      show: false,
      producto: {
        id: "",
        codigo: "",
        nombre: "",
        stock: 1,
        stock_min: 0,
        p_costo_bsf: 0,
        p_costo_usd: 0,
        p_venta_bsf: 0,
        p_venta_usd: 0,
        margen: 1,
        margen_min: 0,
        dolar_base: 1,
        dolar_actual: 2
      }
    };
  }

  setInicialState = () =>
    this.setState({
      show: false,
      producto: {
        id: "",
        codigo: "",
        nombre: "",
        stock: 1,
        stock_min: 0,
        p_costo_bsf: 0,
        p_costo_usd: 0,
        p_venta_bsf: 0,
        p_venta_usd: 0,
        margen: 1,
        margen_min: 0,
        dolar_base: 1,
        dolar_actual: 2
      }
    });

  toggle = () =>
    this.setState({
      show: !this.state.show
    });

  handleChange = e => {
    let newProducto = this.calculadora(e);

    this.setState({
      producto: newProducto
    });
  };

  calculadora = e => {
    let name = e.target.name;
    let value = e.target.value;

    let temp = this.state.producto;
    temp[name] = value;

    let diff = 0;
    name = value === 0 || value === "" ? null : name;
    switch (name) {
      case "p_costo_bsf":
        temp.p_costo_usd = temp.p_costo_bsf / temp.dolar_base;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "dolar_base":
        temp.p_costo_usd = temp.p_costo_bsf / temp.dolar_base;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "p_costo_usd":
        temp.dolar_base = temp.p_costo_bsf / temp.p_costo_usd;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "p_venta_bsf":
        temp.p_venta_usd = temp.p_venta_bsf / temp.dolar_actual;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "dolar_actual":
        temp.p_venta_usd = temp.p_venta_bsf / temp.dolar_actual;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "p_venta_usd":
        temp.p_venta_bsf = temp.p_venta_usd * temp.dolar_actual;
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = (diff / temp.p_costo_usd) * 100;
        break;

      case "margen":
        temp.p_venta_usd =
          (temp.margen * temp.p_costo_usd) / 100 + parseFloat(temp.p_costo_usd);
        temp.p_venta_bsf = temp.p_venta_usd * temp.dolar_actual;
        break;

      default:
        console.log("[calculadora] default");
    }
    return temp;
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const data = this.state.producto; /** ESTA ES LA DATA A STOREAR EN LA BD */
    const dataToSend = {
      id: uuid(),
      codigo: data.codigo,
      nombre: data.nombre,
      stock: data.stock,
      stock_min: data.stock_min,
      p_costo_bsf: data.p_costo_bsf,
      p_costo_usd: data.p_costo_usd,
      p_venta_bsf: data.p_venta_bsf,
      margen_min: data.margen,
      dolar_base: data.dolar_base,
      dolar_actual:
        data.dolar_actual /* TODO: Remover esto de aqui es solo para probar */
    };

    this.setInicialState();
    this.props.handleModal(dataToSend);
  };

  render() {
    return (
      <div>
        <button className={this.classNameButton} onClick={this.toggle}>
          <i className={this.classNameIcon}></i>
          {this.buttonLabel}
        </button>
        <Modal
          isOpen={this.state.show}
          toggle={this.toggle}
          className={"className"}
          size={"lg"}
        >
          <ModalHeader toggle={this.toggle}>
            <span className="h5">
              <i className="fas fa-boxes pr-3" />
              Agregar nuevo producto
            </span>{" "}
            <small className="text-muted font-italic">
              | Inventario de Productos
            </small>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleOnSubmit} className="pr-1 pl-1">
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="codigo">Codigo</Label>
                    <Input
                      value={this.state.producto.codigo}
                      onChange={this.handleChange}
                      type="number"
                      name="codigo"
                      id="codigo"
                    />
                  </FormGroup>
                </Col>
                <Col md={9}>
                  <FormGroup>
                    <Label for="nombre">Nombre del producto</Label>
                    <Input
                      value={this.state.producto.nombre}
                      onChange={this.handleChange}
                      type="text"
                      name="nombre"
                      id="nombre"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form className="pb-3">
                <Col md={5}>
                  <div className="d-flex flex-wrap">
                    <Label for="stock" className="mb-0 pt-1 mr-2">
                      Stock
                    </Label>
                    <Input
                      value={this.state.producto.stock}
                      onChange={this.handleChange}
                      type="number"
                      name="stock"
                      id="stock"
                      className="col-md-6"
                    />
                  </div>
                </Col>
                <Col md={{ size: 5, offset: 1 }}>
                  <div className="d-flex flex-wrap">
                    <Label for="stock_min" className="mb-0 pt-1 mr-2">
                      Stock minimo
                    </Label>
                    <Input
                      value={this.state.producto.stock_min}
                      onChange={this.handleChange}
                      type="number"
                      name="stock_min"
                      id="stock_min"
                      className="col-md-6"
                    />
                  </div>
                </Col>
              </Row>

              <Row form className="pb-3 pt-3">
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_costo_bsf">P. costo Bsf</Label>
                    <Input
                      value={this.state.producto.p_costo_bsf}
                      onChange={this.handleChange}
                      type="number"
                      name="p_costo_bsf"
                      id="p_costo_bsf"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Dolar base</Label>
                    <InputGroup>
                      <Input
                        value={this.state.producto.dolar_base}
                        onChange={this.handleChange}
                        type="number"
                        name="dolar_base"
                        id="dolar_base"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <Button outline color="success">
                          <i className="fas fa-sync-alt"></i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_costo_usd">P. costo Usd</Label>
                    <Input
                      value={this.state.producto.p_costo_usd}
                      onChange={this.handleChange}
                      type="number"
                      name="p_costo_usd"
                      id="p_costo_usd"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form className="pt-3">
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_venta_bsf">P. venta Bsf</Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.producto.p_venta_bsf}
                      type="number"
                      name="p_venta_bsf"
                      id="p_venta_bsf"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Dolar actual</Label>
                    <InputGroup>
                      <Input
                        value={this.state.producto.dolar_actual}
                        onChange={this.handleChange}
                        type="number"
                        name="dolar_actual"
                        id="dolar_actual"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <Button outline color="success">
                          <i className="fas fa-sync-alt"></i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_venta_usd">P. venta Usd</Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.producto.p_venta_usd}
                      type="number"
                      name="p_venta_usd"
                      id="p_venta_usd"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form className="pb-4">
                <Col md={5}>
                  <div className="d-flex flex-wrap">
                    <Label className="mb-0 pt-1">Margen</Label>
                    <InputGroup className="col-md-8">
                      <Input
                        onChange={this.handleChange}
                        value={this.state.producto.margen}
                        type="number"
                        id="margen"
                        name="margen"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>%</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </Col>
                <Col md={{ size: 5, offset: 1 }}>
                  <div className="d-flex flex-wrap">
                    <Label className="mb-0 pt-1">Margen min.</Label>
                    <InputGroup className="col-md-8">
                      <Input
                        value={this.state.producto.margen_min}
                        onChange={this.handleChange}
                        type="number"
                        id="margen_min"
                        name="margen_min"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>%</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </Col>
              </Row>

              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>
                  Cancelar
                </Button>{" "}
                <Button color="primary" type="submit">
                  Listo!
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
