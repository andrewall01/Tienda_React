import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ProductoDetalle extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      precio: 0,
      imagen: "",
    };
  }

  componentDidMount() {
    let idprod = this.props.match.params.id;
    let ruta = "http://localhost:3600/productos/" + idprod;
    fetch(ruta)
      .then((response) => response.json())
      .then((datos) => {
        this.setState({
          nombre: datos.nombre,
          precio: datos.precio,
          imagen: datos.imagen,
        });
      });
  }

  render() {
    return (
      <div id="producto_detalle">
        <div className="ruta"><Link to="/">Inicio</Link> / Producto / {this.state.nombre}</div>
        <div className="caja_producto">
          <div className="imagen">
            <img src={"/img/"+this.state.imagen} alt="" />
          </div>
          <div className="datos">
            <h2>{this.state.nombre}</h2>
            <div className="precio">S/. {this.state.precio.toFixed(2)}</div>
            <div className="controles">
              <input type="number" className="cajaCantidad" />
              <button className="btnCarrito">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductoDetalle;
