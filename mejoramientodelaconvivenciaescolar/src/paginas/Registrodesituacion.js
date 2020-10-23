import React from "react";

import "../styles/styles.css";
class Registrodesituacion extends React.Component {
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
                <h3>#consecutivo</h3>

                <input
                  class="form-control"
                  type="text"
                  placeholder="ingrese el id"
                  ón
                  readonly
                />
                <div class="form-group">
                  <br />
                  <label for="exampleFormControlSelect1">
                    Seleccione el tipo de agresion
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Disciplinario </option>
                    <option>Agresion</option>
                    <option>Bullying </option>
                    <option>Acoso </option>
                    <option>Robo </option>
                  </select>
                </div>
                <h4>Descripcion</h4>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Descripcion de lo sucedido"
                  readonly
                />

                <h4>Fecha reporte Sistema</h4>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Fecha"
                  readonly
                />
                <h4>Id usuario</h4>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Usuario"
                  readonly
                />
                <br />

                <div className="col text-center fondo ">
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/menuEstudiante">Registrar</a>
                  </button>
                  <br />
                  <br />
                  <div className="col text-center fondo ">
                    <button
                      type="button"
                      className="btn btn-outline-dark fondo boton"
                    >
                      <a className="container-fluid " href="/menuEstudiante">
                        Volver
                      </a>
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
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

export default Registrodesituacion;
