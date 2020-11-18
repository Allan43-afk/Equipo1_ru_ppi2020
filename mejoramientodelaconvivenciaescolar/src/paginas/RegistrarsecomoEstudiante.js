import React from "react";

import "../styles/styles.css";

class RegistrarsecomoEstudiante extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <br />
            <div class="d-flex justify-content-center text-center">
              <h2>Estudiante</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>#Identificación:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Nombre:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Apellido:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Dirección:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Grado:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Género:</label>
            <select class="form-control form-control-sm col-md-4">
              <option></option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Correo electrónico:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Fecha de  nacimiento:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Nombre del acudiente:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Teléfono del acudiente:</label>
            <input class="form-control form-control-sm col-md-4" type="text" placeholder=""></input>
          </div>
        </div>
        <div class="container">
          <div class="form-group d-flex justify-content-center">
            <label>Teléfono del acudiente:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
              <label class="form-check-label" for="inlineRadio1">Si</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
              <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <form>
            <div class="row">
              <div class="col">
              <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-secondary btn-outline-dark Boton1">
            <a class="text-white" href="./Tipodeusuario">Registrarse</a>{" "}
          </button>
        </div>
              </div>
              <div class="col">
              <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-secondary btn-outline-dark Boton1">
            <a class="text-white" href="./RegistrarsecomoDoEs">Volver</a>{" "}
          </button>
        </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrarsecomoEstudiante;
