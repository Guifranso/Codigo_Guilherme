import React, { Component } from "react";
import FormularioCalculo from "./components/FormularioCalculo";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  render() {
    return (
      <div className="body">
        <header className="hdr">
          <a href="/" className="hdr-item">Calculadora</a>
        </header>
        <FormularioCalculo/>
        <footer className="ftr"></footer>
      </div>
    );
  }
}
//new ListaDeNotas({notas:this.notas})
export default App;
