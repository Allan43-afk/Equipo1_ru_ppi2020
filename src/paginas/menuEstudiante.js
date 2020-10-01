import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class MenuEstudiante extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>
              <center>MENÚ ESTUDIANTE</center>
            </h1>

            <button type="button" className="btn btn-dark boton1">
              <a href="./Tipodeusuario">Volver</a>
            </button>
            <br />
            <br />
            <br />
            <div className="row">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block boton3"
              >
                Registro de Situacion
              </button>

              <br />
              <br />
              <br />
              <div className="col">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block boton2"
                >
                  <a href="./Buzonrespuestas">Buzón de respuestas</a>
                </button>
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
        </div>
      </div>
    );
  }
}

export default MenuEstudiante;
