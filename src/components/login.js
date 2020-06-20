import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  
  render() {
    return(
        <div id="login">
            <h1>Login</h1>
            <form>
                <input type="text" className="input_login"></input>
                <input type="password" className="input_login"></input>
                <button type="text" className="btnIngresar">A Comprar !!!</button>
            </form>
        </div>
    );
  }
}
export default Login;
