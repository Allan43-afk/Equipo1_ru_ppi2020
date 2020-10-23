import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class Tipodeusuario extends React.Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <br />
          <br />
          <img
            src={ImagenInicio}
            class="rounded mx-auto d-block Imageninicio"
            alt="..."
          />
        </div>
        <div class="d-flex justify-content-center ">
          <div class="form-group col-md-4 Texto">
            <select id="inputState" class="form-control Texto">
              <option selected>Tipo de usuario</option>
              <option>Estudiante</option>
              <option>Docente</option>
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-center ">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4">Usuario</label>
              <input
                type="email"
                class="form-control Texto2"
                id="inputEmail4"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputPassword4">Contraseña:</label>
              <input
                type="password"
                class="form-control Texto2"
                id="inputPassword4"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary btn-outline-dark boton2"
            >
              <a href="./menuDocente">Ingresar</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary btn-outline-dark boton2"
            >
              <a href="./Olvidastetucontraseña">¿Olvidaste tu contraseña?</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary btn-outline-dark boton2"
            >
              <a href="./RegistrarsecomoDoEs">¿No tienes cuenta? Cree una</a>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Tipodeusuario;
