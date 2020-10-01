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
            <div className="row">
              <div className="col">
                <img
                  src={ImagenInicio}
                  ClassName="rounded mx-auto d-block imagenInicio"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="col">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block boton43"
          >
            <a href="./Tipodeusuario">Entrar</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Inicio;
