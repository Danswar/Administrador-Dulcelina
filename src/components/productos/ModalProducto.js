import React, { Component } from "react";

import { setDolar } from "../../redux/actions/dolarActions";
import {
  addProduct,
  editProduct,
  toggleModal,
} from "../../redux/actions/productosActions";
import { connect } from "react-redux";

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
  InputGroupText,
  Spinner,
} from "reactstrap";

import DolarShower from "../DolarShower";

class ModalProducto extends Component {
  constructor(props) {
    super(props);

    this.modalTitle = props.modalTitle;
    this.buttonLabel = props.buttonLabel;
    this.classNameButton = props.classNameButton;
    this.classNameIcon = props.classNameIcon;

    /*si viene un producto por las props lo cargamos en el form */
    /*si no se inicializa todo vacio */
    const {
      producto = {
        id: "",
        nombre: "",
        stock: "",
        stock_min: "",
        p_costo: "",
        p_costo_usd: "",
        p_venta: "",
        p_venta_usd: "",
        margen: "",
      },
    } = props;

    /**el margen y el precio venta se calculan al inicializar*/
    let { p_venta, p_costo_usd } = producto;

    if (p_venta !== "" && p_costo_usd !== "") {
      producto.p_venta_usd = parseFloat(
        p_venta / this.props.dolar_actual
      ).toFixed(2);
      let diff = producto.p_venta_usd - p_costo_usd;
      producto.margen = parseFloat((diff / p_costo_usd) * 100).toFixed(2);
    }

    this.state = {
      isOpen: false,
      isSending: false,
      producto: producto,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Handling calculation because dolar changes
    if (prevProps.dolar_actual !== this.props.dolar_actual) {
      let newProduct = {
        ...this.state.producto,
        p_venta: parseFloat(
          this.props.dolar_actual * this.state.producto.p_venta_usd
        ),
      };

      this.setState({
        producto: newProduct,
      });
    }

    // Handling of open property for modal
    if (
      this.state.isOpen === true &&
      prevProps.isOpen === true &&
      this.props.isOpen === false
    ) {
      this.toggle();
      this.props.toggleModal();

      this.setState({
        isSending: false,
      });

      if (this.state.producto.id === "") {
        this.setState({
          producto: {
            id: "",
            nombre: "",
            stock: "",
            stock_min: "",
            p_costo: "",
            p_costo_usd: "",
            p_venta: "",
            p_venta_usd: "",
            margen: "",
          },
        });
      }
    }
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen,
    });

  handleChange = e => {
    let newProducto = this.calculadora(e);

    this.setState({
      producto: newProducto,
    });
  };

  calculadora = e => {
    let name = e.target.name;
    let value = e.target.value;

    let temp = { ...this.state.producto };
    temp[name] = value;

    let diff = 0;
    name = value === 0 || value === "" ? null : name;
    switch (name) {
      case "p_costo_usd":
        // Calc of precio venta usd
        temp.p_venta_usd = parseFloat(
          temp.p_costo_usd * (1 + temp.margen / 100)
        ).toFixed(2);

        // Refresh precio venta bsf
        temp.p_venta = parseFloat(
          temp.p_venta_usd * this.props.dolar_actual
        ).toFixed(2);
        break;

      case "margen":
        // Calc of precio venta usd
        temp.p_venta_usd = parseFloat(
          temp.p_costo_usd * (1 + temp.margen / 100)
        ).toFixed(2);

        // Refresh precio venta bsf
        temp.p_venta = parseFloat(
          temp.p_venta_usd * this.props.dolar_actual
        ).toFixed(2);
        break;

      case "p_venta_usd":
        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);

        temp.p_venta = parseFloat(
          temp.p_venta_usd * this.props.dolar_actual
        ).toFixed(2);
        break;

      case "p_venta":
        // Calc of precio venta usd
        temp.p_venta_usd = parseFloat(
          temp.p_venta / this.props.dolar_actual
        ).toFixed(2);

        diff = temp.p_venta_usd - temp.p_costo_usd;
        temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
        break;

      default:
        console.log("[calculadora] default");
    }
    return temp;
  };

  handleOnSubmit = e => {
    this.setState({ isSending: true });
    e.preventDefault();

    const dataToSend = this.state
      .producto; /** ESTA ES LA DATA A STOREAR EN LA BD */

    dataToSend.id === ""
      ? this.props.addProduct(dataToSend)
      : this.props.editProduct(dataToSend);
  };

  render() {
    return (
      <div>
        <button className={this.classNameButton} onClick={this.toggle}>
          <i className={this.classNameIcon}></i>
          {this.buttonLabel}
        </button>
        <Modal
          isOpen={this.state.isOpen} /* UNO ES LOCAL Y EL OTRO DEL REDUCER */
          toggle={this.toggle}
          className={"className"}
          size={"lg"}
        >
          <ModalHeader toggle={this.toggle}>
            <span className="h5">
              <i className="fas fa-boxes pr-3" />
              {this.modalTitle}
            </span>{" "}
            <small className="text-muted font-italic d-none d-sm-inline">
              | Inventario de Productos
            </small>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleOnSubmit} className="pr-1 pl-1">
              <Row form>
                <Col>
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
                    <Label for="p_costo_usd">P. costo $</Label>
                    <Input
                      value={this.state.producto.p_costo_usd}
                      onChange={this.handleChange}
                      type="number"
                      name="p_costo_usd"
                      id="p_costo_usd"
                      step="any"
                      required
                    />
                  </FormGroup>
                </Col>
                {/*<Col md={4}>
                  <FormGroup>
                    <Label for="p_costo">P. costo Bsf</Label>
                    <Input
                      value={this.state.producto.p_costo}
                      onChange={this.handleChange}
                      type="number"
                      name="p_costo"
                      id="p_costo"
                      step="any"
                      required
                    />
                  </FormGroup> 
                </Col> */}
                <Col
                  md={4}
                  className="d-flex flex-wrap justify-content-center align-items-center"
                >
                  <DolarShower />
                </Col>
              </Row>

              <Row form className="pt-3">
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_venta_usd">P. venta $</Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.producto.p_venta_usd}
                      type="number"
                      name="p_venta_usd"
                      id="p_venta_usd"
                      step="any"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Margen</Label>
                    <InputGroup>
                      <Input
                        onChange={this.handleChange}
                        value={this.state.producto.margen}
                        type="number"
                        id="margen"
                        name="margen"
                        step="any"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>%</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="p_venta">P. venta Bsf</Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.producto.p_venta}
                      type="number"
                      name="p_venta"
                      id="p_venta"
                      step="any"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>
                  Cancelar
                </Button>{" "}
                {!this.state.isSending && (
                  <Button color="primary" type="submit">
                    Listo!
                  </Button>
                )}
                {this.state.isSending && <Spinner color="warning" />}
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dolar_actual: state.dolar.dolar_actual,
  isOpen: state.productos.modalIsOpen,
});

const mapActionsToProps = {
  setDolar,
  addProduct,
  editProduct,
  toggleModal,
};

export default connect(mapStateToProps, mapActionsToProps)(ModalProducto);
