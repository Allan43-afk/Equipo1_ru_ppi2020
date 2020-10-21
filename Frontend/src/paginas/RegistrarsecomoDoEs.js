import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";
class RegistrarsecomoDoEs extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>
              <center>REGISTRARSE COMO:</center>
            </h1>

            <br />
            <br />
            <br />
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block boton51"
              >
                Docente
              </button>

              <br />
              <br />
              <br />
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block boton51"
                >
                  Estudiante
                </button>

                <br />
                <br />
                <br />
                <br />
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block botonvolver"
                  >
                    <a href="/Tipodeusuario">Volver</a>
                  </button>
                  <br />
                  <br />
                  <br />
                  <div className="col">
                    <img
                      src={ImagenInicio}
                      ClassName="rounded mx-auto d-block imagenInicio"
                      alt="..."
                      width="1100"
                      display="block"
                      margin-
                      t="auto"
                      margin-right="auto"
                    />
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

export default RegistrarsecomoDoEs;
