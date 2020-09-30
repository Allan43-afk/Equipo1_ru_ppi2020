import React from "react";
import "../styles/styles.css";

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
            <div class="boton1">
              <center>
                <button type="button" class="btn btn-dark">
                  Docente
                </button>
              </center>

              <br />
              <br />
              <br />
              <div class="boton2">
                <center>
                  <button type="button" class="btn btn-dark">
                    Estudiante
                  </button>
                </center>

                <br />
                <br />
                <br />
                <div class="Boton">
                  <center>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Volver
                    </button>
                  </center>
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
