import React from "react";
import "../styles/styles.css";
import ImagenTip from "../imagenes/ImagenInicio.png";

class Tipodeusuario extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col lg-12">
            <div className="col text-center">
              <img
                src={ImagenTip}
                className="img-fluid"
                alt=""
                width="500"
                height="200"
              />
              <div />
            </div>
            <div className="col text-center">
              <div className="dropdown text-center">
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Estudiante
                  </a>
                  <a className="dropdown-item" href="#">
                    Docente
                  </a>
                  <div className="form-group row"></div>
                </div>
            </div>
          </div>
        </div>
        <div class="from-row formulario text-center">
          <div className="form-group col-md-6 text-center">
            <label for="inputEmail4">Usuario</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
        </div>
        <div class="from-row formulario text-center">
          <div className="form-group col-md-6 text-center">
            <div className="form-group col-md-6 v">
              <div className="form-group col-md-6 v">
                <label for="inputPassword4">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  <a href="./Tipodeusuario">Ingresar</a>
                </button>
              </div>

              <br />

              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  <a href="./Tipodeusuario">¿Olvidaste tu contraaseña?</a>
                </button>
              </div>
              <br />
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  <a href="./Tipodeusuario">¿No tienes cuenta?Cree una</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    );
  }
}
export default Tipodeusuario;
