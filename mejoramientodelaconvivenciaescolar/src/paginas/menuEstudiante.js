import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class MenuEstudiante extends React.Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <br />
          <div class="d-flex justify-content-center text-center">
            <h2>Menú principal</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-outline-dark boton50"
          >
            <a class="text-white" href="./Registrodesituacion">Registro de situación</a>{" "}
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-outline-dark boton50"
          >
            <a class="text-white" href="./Buzonrespuestas">Buzón de respuestas</a>{" "}
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary primary btn-outline-dark Boton11"
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

export default MenuEstudiante;
