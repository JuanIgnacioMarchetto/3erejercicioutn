import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import Container from "./components/conteiner/Container.jsx";
import Detalles from "./components/detalles/Detalles.jsx";
import Caracteristicas from "./components/caracteristicas/Caracteristicas.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mt-3">
          <div className="row col-lg-9">
            <Container />
          </div>
          <div className="col-lg-3">
            <Detalles />
          </div>
        </div>
        <div className="m-5 ">
          <Caracteristicas />
        </div>
      </div>
    </>
  );
}

export default App;