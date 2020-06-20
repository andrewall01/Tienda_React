import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Cabecera extends Component {
  render() {
    return (
      <div id="cabecera">
        <div className="logo"><Link to="/">CodiGOStore</Link></div>
        <div className="buscador">
          <input type="text" placeholder="Busca un producto" />
          <button>Buscar</button>
        </div>
        <div className="enlaces">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/carrito">Carrito</Link>
        </div>
      </div>
    );
  }
}
export default Cabecera;
