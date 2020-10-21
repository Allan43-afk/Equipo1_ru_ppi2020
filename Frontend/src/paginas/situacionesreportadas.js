import React from "react";

import "../styles/styles.css";
class situacionesreportadas extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
                <h1> Situaciones reportadas:</h1>
                <br />
                <h2> Felipe Medina Perez</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">ver</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Situacion reportada 1</option>
                    <option>Situacion reportada 2</option>
                  </select>
                  <br />
                </div>
                <h2> Anderson Ardila Restrepo</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">ver</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Situacion reportada 1</option>
                    <option>Situacion reportada 2</option>
                  </select>
                  <br />
                </div>
                <h2>Andres Felipe Machado</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">ver</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Situacion reportada 1</option>
                    <option>Situacion reportada 2</option>
                  </select>
                  <br />
                </div>
                <div className="col text-center  ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/menuDocente">Volver</a>
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default situacionesreportadas;
