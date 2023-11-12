import React from "react";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Detalles from "./components/Detalles";
import Caracteristicas from "./components/Caracteristicas";

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