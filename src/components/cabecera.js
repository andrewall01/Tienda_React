import React, { Component } from "react";
class Cabecera extends Component {
  render() {
    return (
      <div id="cabecera">
        <div className="logo">CodiGoStore</div>
        <div className="buscador">
          <input type="text" placeholder="Busca un producto" />
          <button>Buscar</button>
        </div>
        <div className="enlaces">
          <a href="#">Iniciar Sesión</a>
          <a href="#">Carrito</a>
        </div>
      </div>
    );
  }
}
export default Cabecera;
