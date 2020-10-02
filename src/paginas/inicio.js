import React from "react";
import ImagenInicio from "../imagenes/ImagenInicio.png";
import "../styles/styles.css";
class Inicio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 text-center">
            <h1>MEJORAMIENTO DE LA CONVIVENCIA ESCOLAR</h1>
            <br />
            <br />
            <img
              src={ImagenInicio}
              ClassName="rounded mx-auto d-block imagenInicio"
              alt="..."
              width="390"
              display="block"
              margin-
              t="auto"
              margin-right="auto"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            <a href="./Tipodeusuario">Entrar</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Inicio;
