import React from "react";

import "../styles/styles.css";
class Buzonrespuestas extends React.Component {
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
                <h1> Buzon de respuestas</h1>
                <br />
                <h2> Gloria Lora</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    ver
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Respuesta 1 </option>
                    <option>Respuesta 2</option>
                    <option>Respuesta 3 </option>
                    <option>Respuesta 4 </option>
                    <option>Respuesta 5 </option>
                  </select>
                  <br/>
                </div>
                <h2> Martha Duque</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    ver
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Respuesta 1 </option>
                    <option>Respuesta 2</option>
                    <option>Respuesta 3 </option>
                    <option>Respuesta 4 </option>
                    <option>Respuesta 5 </option>
                  </select>
                  <br/>
                </div>
                <h2>Brahian Cano</h2>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    ver
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Respuesta 1 </option>
                    <option>Respuesta 2</option>
                    <option>Respuesta 3 </option>
                    <option>Respuesta 4 </option>
                    <option>Respuesta 5 </option>
                  </select>
                  <br/>
                </div>
                <div className="col text-center  ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/RegistrarsecomoEstudiante">Volver</a>
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

export default Buzonrespuestas;
