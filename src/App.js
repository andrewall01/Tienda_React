import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cabecera from './components/cabecera';
import Pie from './components/pie';
import Principal from './components/principal';
import productoDetalle from './components/producto_detalle';
import Login from './components/login';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <header>
          <Cabecera></Cabecera>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={ Principal } />
            <Route exact path='/producto/detalle/:id' component={ productoDetalle } />
            <Route exact path='/login' component={Login} />
          </Switch>
        </main>
        <footer>
          <Pie></Pie>
        </footer>
      </div>
    );
  }
}

export default App;
