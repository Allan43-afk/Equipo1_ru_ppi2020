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
              <center>
                {" "}
                <img
                  src={ImagenTip}
                  className="img-fluid"
                  alt="..."
                  width="500"
                  height="200"
                />
              </center>
              <div />
            </div>
            <div className="col text-center">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tipo de Usuario
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    Docente
                  </a>
                  <a class="dropdown-item" href="#">
                  Estudiante
                  </a>
                  
                </div>
              </div>
            </div>
            <div class="from-row formulario text-center">
              <div className="form-group col-md-6 text-center formulario">
                <center>
                  {" "}
                  <label for="inputEmail4">Usuario</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </center>
              </div>

              <div class="form-group col-md-6 text-center formulario">
                <label for="inputPassword4">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block botonIngresar"
                  >
                    Ingresar
                  </button>
                  <br />
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block botonOlvido"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                    <br />
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block botonCrea"
                      >
                        ¿No tienes cuenta? Crea una
                      </button>
                      <br />
                    </div>
                  </div>
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
