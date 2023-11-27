import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Clientes from "./Container/Clientes/Clientes";
import Home from "./Container/Home";
import Manutencoes from "./Container/Manutencoes";
import Mecanicos from "./Container/Mecanicos/Mecanicos";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/manutencoes" exact component={Manutencoes} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/mecanicos" exact component={Mecanicos} />
      </BrowserRouter>
    </React.Fragment>
  )
}

