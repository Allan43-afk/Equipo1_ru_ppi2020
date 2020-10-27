import React from "react";
import "../styles/styles.css";
class RegistrarsecomoDoEs extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <h3>Registrarse como:</h3>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark btn-lg boton51"
            >
              <a class="text-white"  href="./RegistrarsecomoDocente">Docente</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-lg btn-outline-dark boton51"
            >
              <a class="text-white"  href="./RegistrarsecomoEstudiante">Estudiante</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark Boton10"
            >
              <a class="text-white"  href="./Tipodeusuario">Volver</a>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrarsecomoDoEs;
