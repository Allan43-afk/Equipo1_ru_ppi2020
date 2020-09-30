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
            <div class="row">
              <center>
                <button type="button" class="btn btn-dark botones">
                  Docente
                </button>
              </center>

              <br />
              <br />
              <br />
              <div class="row">
                <center>
                  <button type="button" class="btn btn-dark botones">
                    Estudiante
                  </button>
                </center>

                <br />
                <br />
                <br />
                <div class="row">
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
