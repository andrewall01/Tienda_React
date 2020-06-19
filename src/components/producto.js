import React, { Component } from "react";
import { Link } from "react-router-dom";

class Producto extends Component {
  render() {
    return (
      <div className="caja">
          <Link to={`/producto/detalle/${this.props.dato.id}`}>
        <div className="foto">
          <img src={"/img/" + this.props.dato.imagen} />
        </div>
        <div className="nombre">{this.props.dato.nombre}</div>
        <div className="precio">S/. {this.props.dato.precio}</div>
        </Link>
      </div>
    );
  }
}
export default Producto;
