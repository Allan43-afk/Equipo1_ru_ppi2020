import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class Tipodeusuario extends React.Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <br />
          <br />
          <img
            src={ImagenInicio}
            class="rounded mx-auto d-block Imageninicio"
            alt="..."
          />
        </div>
        <div class="d-flex justify-content-center ">
          <div class="form-group col-md-4 Texto">
            <select id="inputState" class="form-control Texto">
              <option selected>Tipo de usuario</option>
              <option>Estudiante</option>
              <option>Docente</option>
            </select>
          </div>
        </div>
        
        <div class="container text-center-flex justify-content-center texte-center">
          <div class="form-group d-flex justify-content-center flex-column text-center">
            <label for="exampleInputEmail1">Usuario</label>
            <input type="email" class="form-control col-md-4 col-center" nameid="exampleInputEmail1" aria-describedby="emailHelp" />
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control col-md-4 col-center" id="exampleInputPassword1" />
       
        </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark boton2"
            >
              <a class="text-white" href="./menuDocente">Ingresar</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark boton2"
            >
              <a class="text-white" href="./Olvidastetucontraseña">¿Olvidaste tu contraseña?</a>{" "}
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary btn-outline-dark boton2"
            >
              <a class="text-white" href="./RegistrarsecomoDoEs">¿No tienes cuenta? Cree una</a>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Tipodeusuario;