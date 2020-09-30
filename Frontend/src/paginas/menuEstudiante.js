import React from "react";
import "../styles/styles.css";

class MenuEstudiante extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>
              <center>MENÚ PRINCIPAL</center>
            </h1>

            <button type="button" className="btn btn-dark">
              <a href="./">Volver</a>
            </button>
            <br />
            <br />
            <br />
            <div className="row">
              <center>
              <button type="button" className="btn btn-outline-primary ">Registro Situación</button>
              </center>
              <br />
              <br />
              <br />
              <div className="row">
                <center>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Buzón de respuestas
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuEstudiante;
