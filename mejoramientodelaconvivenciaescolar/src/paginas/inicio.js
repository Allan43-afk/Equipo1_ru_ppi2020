import React from "react";
import ImagenInicio from "../imagenes/ImagenInicio.png";
import "../styles/styles.css";
class Inicio extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div class="d-flex justify-content-center text-center">
          <h1>
            MEJORAMIENTO DE
            <br /> LA CONVIVENCIA <br /> ESCOLAR
          </h1>
        </div>

        <div class="d-flex justify-content-center">
          <img
            src={ImagenInicio}
            class="rounded mx-auto d-block Imageninicio"
            alt="..."
          />
        </div>

        <br />

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btn-outline-dark Boton1">
            <a class="text-white" href="./Tipodeusuario">Entrar</a>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Inicio;
