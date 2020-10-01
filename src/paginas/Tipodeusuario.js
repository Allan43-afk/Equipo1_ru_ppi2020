import React from "react";
import "../styles/styles.css";
import ImagenTip from "../imagenes/ImagenInicio.png";

class Tipodeusuario extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          <div class="col">
            <center>
              {" "}
              <img
                src={ImagenTip}
                className="img-fluid"
                alt=""
                width="500"
                height="200"
              />
            </center>
            <div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tipo de Usuario
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Estudiante
                  </a>
                  <a class="dropdown-item" href="#">
                    Docente
                  </a>
                  <div class="form-group row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group col-md-6">
          <label for="inputEmail4">Usuario</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>

        <div class="col">
          <button type="button" className="botonInicio">
            {" "}
            <a href="./menuEstudiante">Ingresar</a>
          </button>
        </div>

        <br />

        <div class="col">
          <button type="button" className="botonInicio">
            {" "}
            <a href="./Tipodeusuario">¿Olvidaste tu contraseña?</a>
          </button>
        </div>

        <br />

        <div class="col">
          <button type="button" className="botonInicio">
            {" "}
            <a href="./Tipodeusuario">¿No tienes cuenta?Crea una</a>
          </button>
        </div>
      </div>
    );
  }
}
export default Tipodeusuario;
