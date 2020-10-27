import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class MenuDocente extends React.Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <br />
          <div class="d-flex justify-content-center text-center">
            <h1>Menú principal</h1>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-outline-dark boton51"
          >
            <a class="text-white" href="./situacionesreportadas">Situaciones reportadas</a>{" "}
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark Boton12"
            >
              <a class="text-white" href="./Tipodeusuario">Volver</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <img
            src={ImagenInicio}
            class="rounded mx-auto d-block Imageninicio"
            alt="..."
          />
        </div>
      </div>
    );
  }
}

export default MenuDocente;
