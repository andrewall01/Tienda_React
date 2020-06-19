import React, { Component } from "react";
import Producto from "./producto";

class Principal extends Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    let ruta = "http://localhost:3600/productos";
    fetch(ruta)
      .then((response) => response.json())
      .then((datos) => {
        this.setState({
          lista: datos,
        });
      });
  }

  render() {
    return (
      <div id="principal">
        <h1>Productos</h1>
        <div className="lista">
          {this.state.lista.map((prod) => {
            return <Producto dato={prod}></Producto>;
          })}
        </div>
      </div>
    );
  }
}
export default Principal;
