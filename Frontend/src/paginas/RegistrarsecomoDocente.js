import React from "react";

import "../styles/styles.css";

class RegistrarsecomoDocente extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col text-center">
                  <br />
                  <h1> Menu principal</h1>
                  <br />
                  <br />
                </div>
              </div>

              <div className="container-fluid ">
                <div className="col text-center ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/situacionesreportadas">Situaciones Reportadas</a>
                  </button>
                </div>
              </div>

              <div className="container-fluid ">
                <div className="col text-center ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/Tiposdeusuario">Volver</a>
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

export default RegistrarsecomoDocente;
